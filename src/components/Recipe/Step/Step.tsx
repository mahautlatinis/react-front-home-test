import StepItem from "./StepItem/StepItem";
import { StepInterface } from "../../../interfaces/Recipe/Step/Step.interface";
import "./style.css"

export default function Step(props: StepInterface[])
{
  return (
    <>{props && props.map((obj) => 
      <StepItem 
        description={obj.description} 
        order={obj.order}
        ingredients={obj.ingredients}
        quantities={obj.quantities}
      />)}
    </>
  );
};
