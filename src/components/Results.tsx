import React, { useEffect } from "react";
import { useState } from "react";
import Diet from "./Diet";

interface ResultsProps {
  bmi: number | undefined;
  setBmi: React.Dispatch<React.SetStateAction<number | undefined>>;
  height: number;
  weight: number;
}

function Results({ bmi, setBmi, height, weight }: ResultsProps) {
  const [healthyWeight, setHealthyWeight] = useState<number[]>();
  const [bmiClass, setBmiClass] = useState<string>();

  useEffect(() => {
    //bmi
    const calculatedBmi = parseFloat((weight / (height * height)).toFixed(2));
    //healthy weight
    const healthyWeightStart = parseFloat(
      (18.5 * (height * height)).toFixed(2)
    );
    const healthyWeightEnd = parseFloat((24.9 * (height * height)).toFixed(2));

    setHealthyWeight([healthyWeightStart, healthyWeightEnd]);
    setBmi(calculatedBmi);
    //bmiClass
    if (calculatedBmi) {
      if (calculatedBmi < 18.5) {
        setBmiClass("Underweight");
      } else if (calculatedBmi <= 24.9) {
        setBmiClass("Normal Weight");
      } else if (calculatedBmi <= 29.9) {
        setBmiClass("Overweight");
      } else if (calculatedBmi <= 35) {
        setBmiClass("Moderately Obese");
      } else if (calculatedBmi >= 40) {
        setBmiClass("Severely Obese");
      }
    }
  }, [height, weight, bmiClass, bmi]);

  return (
    <div>
      <h1>Results</h1>
      <p>
        Your BMI is <span id="bmi">{bmi} kg/m2. </span>
      </p>
      <p>
        Your BMI class is <span id="bmiClass"> {bmiClass}</span>
      </p>
      <p>
        A healthy weight range for your height is {healthyWeight?.[0]} kg to{" "}
        {healthyWeight?.[1]} kg
      </p>
      {bmi && bmi > 24.9 && healthyWeight && (
        <p>
          Lost {(weight - healthyWeight?.[1]).toFixed(2)} kg to be in the
          healthy weight range.
        </p>
      )}
      {bmi && bmi < 18.5 && healthyWeight && (
        <p>
          Gain {(healthyWeight?.[0] - weight).toFixed(2)} kg to be in the
          healthy weight range.
        </p>
      )}

      {bmiClass && <Diet bmiClass={bmiClass} />}
    </div>
  );
}

export default Results;
