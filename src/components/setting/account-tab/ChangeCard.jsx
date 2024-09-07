import { useEffect, useState } from "react";

import Button from "../../Button";
import EditInput from "../../features/enter-tab/EditInput";
import { RiErrorWarningLine } from "react-icons/ri";
import Title from "../../Title";
import styled from "styled-components";
import { toast } from "react-toastify";

const Container = styled.div`
  padding: 20px;
  border-radius: 5px;
  direction: rtl;
  background-color: #1a1a18;
  order: ${(props) => props.id === 3 && "4"};
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 25px 0;
`;
const Warn = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  margin-bottom: 20px;
  svg {
    color: #ffc700;
  }
  h3 {
    color: #dedee9;
    font-size: 11px;
    font-weight: 400;
  }
  @media (min-width: 1400px) {
    font-size: 16px;
  }
`;
const Error = styled.span`
  color: red;
  font-size: 12px;
  margin-top: -20px;
`;
const ChangeCard = ({ id, title, warn, inputs }) => {
  const [inputValues, setInputValues] = useState([]);
  const [inputErrors, setInputErrors] = useState([]);

  useEffect(() => {
    if (Array.isArray(inputs)) {
      setInputValues(
        inputs.map((input) => ({ id: input.id, value: input.value }))
      );
      setInputErrors(inputs.map((input) => ({ id: input.id, error: "" })));
    }
  }, [inputs]);

  const handleInputChange = (inputId, value) => {
    setInputValues((prevInputValues) =>
      prevInputValues.map((input) =>
        input.id === inputId ? { ...input, value } : input
      )
    );
    setInputErrors((prevInputErrors) =>
      prevInputErrors.map((input) =>
        input.id === inputId
          ? { ...input, error: validateInput(input, value) }
          : input
      )
    );
  };

  const validateInput = (input, value) => {
    if (input.validation === "mobile") {
      const mobileRegex = /^(?:\+98|0)9\d{9}$/;
      if (!mobileRegex.test(value)) {
        return "شماره موبایل وارد شده صحیح نیست.";
      }
    } else if (input.validation === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value)) {
        return "آدرس ایمیل وارد شده صحیح نیست.";
      }
    } else if (input.validation === "password") {
      if (value.length < 6) {
        return "رمز عبور باید حداقل شامل ۶ کاراکتر باشد.";
      }
    }
    return "";
  };

  const handleSave = () => {
    let hasEmptyInput = false;
    const updatedInputs = inputs.map((input) => {
      const inputValue = inputValues.find(
        (inputValue) => inputValue.id === input.id
      );

      if (inputValue.value.trim() === "") {
        hasEmptyInput = true;
        setInputErrors((prevInputErrors) =>
          prevInputErrors.map((inputError) =>
            inputError.id === input.id
              ? { ...inputError, error: "این فیلد الزامی است." }
              : inputError
          )
        );
      } else {
        const validationError = validateInput(input, inputValue.value);
        setInputErrors((prevInputErrors) =>
          prevInputErrors.map((inputError) =>
            inputError.id === input.id
              ? { ...inputError, error: validationError }
              : inputError
          )
        );
      }

      return { ...input, value: inputValue.value };
    });

    if (hasEmptyInput) {
      return;
    }

    const hasValidationError = updatedInputs.some(
      (input) =>
        inputErrors.find((error) => error.id === input.id)?.error !== ""
    );
    if (hasValidationError) {
      return;
    }

    toast.success(`${title} با موفقیت ذخیره شد!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      bodyClassName: "success",
    });

    setInputValues(inputs.map((input) => ({ id: input.id, value: "" })));
  };

  if (!Array.isArray(inputs) || inputs.length === 0) {
    return null;
  }

  return (
    <Container id={id}>
      <Title title={title} />
      {warn && (
        <Warn>
          <RiErrorWarningLine size={22} />
          <h3>{warn}</h3>
        </Warn>
      )}
      <Inputs>
        {inputs.map((item) => (
          <>
            <EditInput
              type={item.type}
              onchange={(e) => handleInputChange(item.id, e.target.value)}
              key={item.id}
              title={item.label}
              error={
                inputErrors.find((input) => input.id === item.id)?.error ||
                false
              }
              value={
                inputValues.find((input) => input.id === item.id)?.value || ""
              }
            />
            {inputErrors.find((input) => input.id === item.id)?.error && (
              <Error>
                {inputErrors.find((input) => input.id === item.id)?.error}
              </Error>
            )}
          </>
        ))}
      </Inputs>
      <Button
        full
        label={title !== "تغییر شماره موبایل در سراسر متاورس" ? "ذخیره شود" : "تایید"}
        onclick={handleSave}
      />
    </Container>
  );
};

export default ChangeCard;
