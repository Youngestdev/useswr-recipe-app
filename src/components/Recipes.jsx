import React from "react";
import useSWR from "swr";

import Button from "./Button";


export default function Recipes({ setActiveRecipe }) {
  const { data: Recipes } = useSWR(`http://localhost:8081`);

  return (
    <div>
      <h2>
        Recipes List        
      </h2>
      {Recipes ? Recipes.map(Recipe => (
        <p key={Recipe.title}>
          {Recipe.title}
          <Button
            onClick={() => {
              setActiveRecipe(Recipe.id);
            }}
          >
            Load Recipe
          </Button>{" "}
        </p>
      )) : 'loading'}
    </div>
  );
}
