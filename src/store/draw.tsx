const initState = {
  money: 12345,
};

function reducer(state, action) {
  switch (action.type) {
    case "addMoney":
      return { money: state.money + 1 };
    case "minusMoney":
      return { money: state.money - 1 };
  }
}

export default { initState, reducer };
