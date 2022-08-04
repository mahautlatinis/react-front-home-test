import React, { Fragment } from 'react'
import { StepInterface } from "../../../../../interfaces/Recipe/Step/Step.interface";
import "../style.css"

export default function StepItem(props: StepInterface)
{
  return (
    <Fragment>
        <div>
          {props.order}. {props.description}
        </div>
    </Fragment>
  );
};
