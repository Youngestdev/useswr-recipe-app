import React from "react";
import useSWR from "swr";

import Button from "./Button";

export default function Recipe({ activeRecipe, setActiveRecipe }) {
  const { data } = useSWR(
    "http://localhost:8081/" + activeRecipe);

  return (
    <React.Fragment>
      <Button onClick={() => setActiveRecipe(null)}>Back</Button>
      <h2>ID: {activeRecipe}</h2>
      {data ? (
        <div>
          <p>Title: {data.title}</p>
          <p>Content: {data.content}</p>
        </div>
      ) : null}
      <br />
      <br />
    </React.Fragment>
  );
}
