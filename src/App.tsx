import React, {  useReducer } from "react";
import { context, initState, reducer } from "./store";
import routes from './route/index'
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";

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
