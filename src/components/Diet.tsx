import { useEffect, useState } from "react";
import { diets } from "../data/diets";
function Diet({ bmiClass }: { bmiClass: string }) {
  const [diet, setDiet] = useState<string>();
  const [risk, setRisk] = useState<string>();
  useEffect(() => {
    setDiet(diets[bmiClass].Diet);
    setRisk(diets[bmiClass].Risk);
  }, [bmiClass]);
  return (
    <div>
      <p id="risk">{risk}</p>
      <h2>Recommended Diet</h2>
      {
        <ul>
          {diet
            ?.split(".")
            .map((item, index) => item !== "" && <li key={index}>{item}.</li>)}
        </ul>
      }
    </div>
  );
}

export default Diet;
