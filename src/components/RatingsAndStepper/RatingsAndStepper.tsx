import { Icons } from "../Icons/Icons";
import { RatingsAndStepperStyle } from "./RatingsAndStepperStyle";

export function RatingsAndStepper() {
  return (
    <RatingsAndStepperStyle>
      <div className="quantityContainer">
        <Icons icon="SmallMinus" />
        <p className="valueQuantity">1</p>
        <Icons icon="Plus" />
      </div>
    </RatingsAndStepperStyle>
  );
}
