import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import { useState } from "react";

const AccountSecurity = () => {
  const [step, setStep] = useState(1);
  const [time, setTime] = useState('');

  if (step === 1) return <FirstStep setStep={setStep} time={time} setTime={setTime} />;
  if (step === 2) return <SecondStep setStep={setStep} time={time}/>;
  if (step === 3) return <ThirdStep setStep={setStep} time={time} setTime={setTime} />;
};

export default AccountSecurity;
