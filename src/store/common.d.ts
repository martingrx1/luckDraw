type Action = {
  type: string;
  payload: Payload;
};

type State = {};

type Payload = {
  imgUrl: string;
};

type Reducer = (state: State, action: Action) => object;

export { Action, State, Reducer, Payload };
