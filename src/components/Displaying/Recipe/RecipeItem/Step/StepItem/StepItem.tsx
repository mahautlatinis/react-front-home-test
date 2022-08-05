import React, { Fragment } from 'react'
import { StepInterface } from "../../../../../../interfaces/Recipe/Step/Step.interface";
import "../style.css"

export default function StepItem(props: StepInterface)
{
  return (
    <>
        <li>
          <label className="step-index">{props.order}.</label>{props.description}
        </li>
    </>
  );
};
