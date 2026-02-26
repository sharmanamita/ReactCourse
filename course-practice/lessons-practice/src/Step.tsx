import { useState } from "react";

const steps = ["Learn ReactJs", "Preapre for interview", "Get a job"];

export function StepComponent() {
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);

  const handlePrev = () => {
    if (step <= 1) return;
    setStep(step - 1);
  };

  const handleNext = () => {
    if (step >= 3) return;
    setStep(step + 1);
  };

  return (
    <>
      <div className="step-container">
        <div className="close" onClick={() => setOpen(!isOpen)}>
          &times;
        </div>
        {isOpen ? (
          <>
            <div className="steps">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
            <div className="content">
              Step {step}: {steps[step - 1]}
            </div>
            <div className="buttons">
              <button className="active" onClick={handlePrev}>
                Previous
              </button>
              <button className="active" onClick={handleNext}>
                Next
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
