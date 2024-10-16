import React, { useState } from 'react';
import './Stepper.scss'; // For basic styling
import Layoutdoc from '../Common/LayoutDoc/Layoutdoc';
import LayoutDoc2 from '../Common/Layout2/LayoutDoc2';
import LayoutDoc3 from '../Common/Layout3/LayoutDoc3';

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Step 1", "Step 2", "Step 3"];

  // Content for each step
  const stepContent = [<Layoutdoc />, <LayoutDoc2 />, <LayoutDoc3 />];

  // Move to the next step
  const handleNext = () => {
    setCurrentStep(prev => (prev < steps.length ? prev + 1 : prev));
  };

  // Move to the previous step
  const handlePrevious = () => {
    setCurrentStep(prev => (prev > 1 ? prev - 1 : prev));
  };

  // Finish action (reset or submit)
  const handleFinish = () => {
    alert("Form submitted successfully!");
    setCurrentStep(1); // Reset steps after finishing
  };

  return (
    <div className="stepper-container">
      {/* Stepper Circles */}
      <div className="stepper-header">
        <div className="line" />
        {steps.map((step, index) => (
          <div key={index} className={`step ${currentStep === index + 1 ? "active" : ""}`}>
            <div className="circle">{index + 1}</div>
            <div className="label">{step}</div>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="step-content">

        <>{stepContent[currentStep - 1]}</>
      </div>

      {/* Navigation Buttons */}
      <div className="stepper-buttons">
        <button onClick={handlePrevious} disabled={currentStep === 1}>
          Previous
        </button>
        {currentStep < steps.length ? (
          <button onClick={handleNext}>
            Next
          </button>
        ) : (
          <button onClick={handleFinish}>
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default Stepper;
