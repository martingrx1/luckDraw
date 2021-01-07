type Action = {
  type: string;
  payload: Payload;
};

type State = {};

type Payload = {
  imgUrl?: string;
  sidebar?: Array;
};

type Reducer = (state: State, action: Action) => object;

export { Action, State, Reducer, Payload };
