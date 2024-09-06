import * as React from "react";
import Box from "@mui/material/Box";
import { Stepper as MuiStepper } from "@mui/material";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";

const Stepper = ({
  children,
  activeStep,
  setActiveStep,
  steps = [],
  handleSubmit,
}) => {
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <MuiStepper activeStep={activeStep}>
        {steps.length &&
          steps.map((step) => {
            return (
              <Step key={step.id}>
                <StepLabel>{step.title}</StepLabel>
              </Step>
            );
          })}
      </MuiStepper>
      <React.Fragment>
        <Box marginTop={"30px"}>{children[activeStep]}</Box>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button
            onClick={
              activeStep === steps.length - 1 ? handleSubmit : handleNext
            }
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </React.Fragment>
    </Box>
  );
};

export default Stepper;
