import React, { useReducer } from "react";
import { context, initState, reducer } from "./store";
import { renderRoutes } from "react-router-config";
import { BrowserRouter, useHistory, Route } from "react-router-dom";
import routes from "./route";

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </context.Provider>
  );
}

export default App;
