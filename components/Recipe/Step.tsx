import React from "react";
import type { FC } from "react";
import type { Step as StepType } from "../../lib/recipes";

export const Step: FC<StepType> = ({ title, step }) => {
  return (
    <p className="text-xl leading-8">
      {title && <span className="block font-medium">{title} </span>}
      {step}
    </p>
  );
};
