import React, { lazy } from "react";
import ReactDOM from "react-dom";
import { SWRConfig } from "swr";
import fetcher from "./fetch";

// import { ReactQueryConfigProvider } from "react-query";

const Recipes = lazy(() => import("./components/Recipes"));
const Recipe = lazy(() => import("./components/Recipe"));

// const queryConfig = {
//   suspense: true
// };


function App() {
  const [activeRecipe, setActiveRecipe] = React.useState(null);

  return (
    <React.Fragment>
      <h1>Fast Recipes</h1>
      <hr />
      {/* <ReactQueryConfigProvider config={queryConfig}> */}
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher: fetcher,
	  suspense: true
        }}
      >
        <React.Suspense fallback={<h1> Loading ...</h1>}>
          {activeRecipe ? (
            <Recipe
              activeRecipe={activeRecipe}
              setActiveRecipe={setActiveRecipe}
            />
          ) : (
            <Recipes setActiveRecipe={setActiveRecipe} />
          )}
        </React.Suspense>
      </SWRConfig>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
