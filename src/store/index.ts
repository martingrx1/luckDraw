import React, { Context } from "react";
import layout from "./layout";
import draw from "./draw";
import config from "./config";
import { Action, State, Reducer, Payload } from "./common";

function combineReducer(...reducers: Reducer[]) {
  return function (state: State, action: Action) {
    for (let i = 0, len = reducers.length; i < len; i++) {
      let res = reducers[i](state, action);
      if (res) {
        return {
          ...state,
          ...res,
        };
      }
    }
    return state;
  };
}

function combineState(...states: State[]): State {
  const initState = {};
  return states.reduce((pre, cur) => {
    return {
      ...pre,
      ...cur,
    };
  }, initState);
}

const initState = combineState(
  layout.initState,
  draw.initState,
  config.initState
);
const reducer = combineReducer(layout.reducer, draw.reducer, config.reducer);

// console.log(initState, "store中的initstate");
// console.log(reducer, "store中的reducer");

const context: Context<any> = React.createContext(initState);

export { context, reducer, initState };
