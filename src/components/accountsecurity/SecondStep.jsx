import { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { toast } from "react-toastify";

const Codes = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 auto;
  direction: ltr;
  margin-bottom: 30px !important;
  input {
    width: 30px;
    height: 30px;
    font-size: 16px;
    padding: 12px;
    text-align: center;
    border-radius: 5px;
    border: 1 solid #2c2c2c;
    color: #bababa;
    font-weight: 400;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    input {
      width: 46px;
      height: 46px;
      font-size: 16px;
    }
  }
`;
const Container = styled.div`
  margin-top: 20px;
  h3 {
    color: white;
    font-size: 16px;
    font-weight: 400;
  }
  p {
    color: #969696;
    font-size: 16px;
    font-weight: 400;
  }

  input {
    border-radius: 5px;
    background-color: #272727;
    border: 1px solid #2c2c2c;
    padding: 14px 18px 14px 18px;
    outline: none;
    width: 93%;
    color: #bababa;
    margin-top: 20px;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  button {
    border-radius: 5px;
    height: 50px;
    width: 100%;
    background-color: #004531;
    border: 1px solid #18c08f;
    margin-top: 30px;
    margin-bottom: 15px;
    color: #18c08f;
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;
    font-size: 15px;
    text-align: center;
    width: fit-content;
    margin: 0 auto;
    h4 {
      color: #008bf8;
      margin-left: 5px;
    }
    span {
      color: #969696;
    }
  }

  h2 {
    font-size: 12px;
    color: #dc920a;
    cursor: pointer;
    &:hover {
      color: #ad740a;
    }
  }
`;

const Alert = styled.div`
  color: #ffffff;
  h2 {
    font-size: 14px;
    margin-bottom: 10px;
  }
  h5 {
    font-size: 12px;
  }
`;
const SecondStep = ({ setStep, time }) => {
  const [timer, setTimer] = useState(2 * 60);
  const inputRefs = useRef([]);
  const timerInterval = useRef(null);

  useEffect(() => {
    timerInterval.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(timerInterval.current);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval.current);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = String(minutes).padStart(2, "۰");
    const formattedSeconds = String(seconds).padStart(2, "۰");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const handleInputChange = (index, event) => {
    const value = event.target.value;
    if (value === "") {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    } else if (value.length === 1 && /^\d$/.test(value)) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else if (value.length > 1) {
      event.target.value = value.slice(0, 1);
    }
  };
  const handlePaste = (event) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("text/plain");
    const digits = pasteData.split("").slice(0, 6);
    digits.forEach((digit, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = digit;
        if (index < inputRefs.current.length - 1) {
          inputRefs.current[index + 1].focus();
        }
      }
    });
  };

  const values = inputRefs.current.map((inputRef) => inputRef.value);
  const allValuesNotEmpty = values.every((value) => value !== "");
  const nextStep = () => {
    if (allValuesNotEmpty) {
      setStep(3);

      toast.success(
        <Alert>
          <h2>کیف پول شما با موفقیت خاموش شد.</h2>
          <h5>مدت زمان: {time} دقیقه</h5>
        </Alert>,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          bodyClassName: "success",
        }
      );
    }
  };

  const resetInputs = () => {
    inputRefs.current.forEach((inputRef) => {
      inputRef.value = "";
    });
    inputRefs.current[0].focus();
  };

  const resetHandler = () => {
    resetInputs();
    clearInterval(timerInterval.current);
    setTimer(2 * 60);
  };

  return (
    <Container>
      <h3>تایید حساب</h3>
      <p>کد ۶ رقمی را وارد کنید.</p>
      <Codes>
        {[...Array(6)].map((_, index) => (
          <input
            placeholder="-"
            key={index}
            type="number"
            maxLength={1}
            ref={(el) => (inputRefs.current[index] = el)}
            onChange={(event) => handleInputChange(index, event)}
            onPaste={(event) => handlePaste(event)}
          />
        ))}
      </Codes>
      <div>
        <h4>
          {formatTime(timer)
            .toLocaleString()
            .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
        </h4>
        {timer !== 0 ? (
          <span>تا ارسال مجدد کد</span>
        ) : (
          <h2 onClick={resetHandler}>ارسال مجدد کد</h2>
        )}
      </div>
      <button disabled={!allValuesNotEmpty} onClick={nextStep}>
        ادامه
      </button>
    </Container>
  );
};

export default SecondStep;
