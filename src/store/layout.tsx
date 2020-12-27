const initState = {
  count: 12345,
  navIndex: 0,
  showSidebar: true,
  navTitle: "",
};

function reducer(state, action) {
  // console.log(action);
  switch (action.type) {
    case "changeNavTitle":
      return {
        ...state,
        navTitle: action.payload.title,
      };
    case "addCount":
      return { count: state.count + 1 };
    case "changeSidebarStatus":
      return { ...state, showSidebar: !state.showSidebar };
  }
}

export default { initState, reducer };
