import StepItem from "./StepItem/StepItem";

import { StepInterface } from "../../../../../interfaces/Recipe/Step/Step.interface";
import "./style.css"

interface Step {
  list?: StepInterface[]
}

export default function Step(props: Step)
{
  return (
    <>
    {props && props.list && props.list.map((obj) => 
      <StepItem 
        description={obj.description} 
        order={obj.order}
        ingredients={obj.ingredients}
        quantities={obj.quantities}
      />)}
    </>
  );
};
