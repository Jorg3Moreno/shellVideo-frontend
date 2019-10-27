const reducers = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        myList: [...state.myList, action.payload]
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        myList: state.myList.filter(
          favoriteItem => favoriteItem.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export default reducers;