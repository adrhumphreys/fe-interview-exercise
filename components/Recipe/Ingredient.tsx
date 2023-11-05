import React from "react";
import type { FC } from "react";
import type { Ingredient as IngredientType } from "../../lib/recipes";

export const Ingredient: FC<IngredientType> = ({ ingredient, context }) => {
  return (
    <p className="text-xl leading-8">
      <span className="font-medium">{ingredient} </span>
      <span className="block text-lg text-gray-500">{context}</span>
    </p>
  );
};
