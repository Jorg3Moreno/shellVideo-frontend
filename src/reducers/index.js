const reducers = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        myList: [...state.myList, action.payload]
      };
    default:
      return state;
  }
};

export default reducers;
