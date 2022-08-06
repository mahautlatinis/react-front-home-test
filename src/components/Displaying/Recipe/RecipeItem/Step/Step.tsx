import { StepInterface } from "../../../../../interfaces/Recipe/Step/Step.interface";

interface Step {
  list?: StepInterface[]
}

export default function Step(props: Step)
{
  return (
    <>
      {props && props.list && props.list.map((step) =>
          <span key={step.order} style={{fontSize: "12px"}}>{step.order} : {step.description}</span>
      )}
    </>
  );
};
