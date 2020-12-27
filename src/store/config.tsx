import { Action, State, Reducer, Payload } from "./common";

type ConfigState = State & {
  imgUrl: string;
};

type ConfigAction = Action & {
  payload: {
    imgUrl: string;
  };
};

const initState = {
  imgUrl: "",
};

const reducer: Reducer = (state: ConfigState, action: ConfigAction) => {
  console.log("dispatch");
  switch (action.type) {
    case "setImgUrl":
      return { imgUrl: action.payload.imgUrl };
  }
};

export default { initState, reducer };
