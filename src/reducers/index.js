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
    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload
      };
    case "LOGOUT_REQUEST":
      return {
        ...satate,
        user: action.payload
      };
    case "REGISTER_REQUEST":
      return {
        ...state,
        user: action.payload
      };
    case "GET_VIDEO_SOURCE":
      return {
        ...state,
        playing:
          state.trends.find(item => item.id === Number(action.payload)) ||
          state.originals.find(item => item.id === Number(action.payload)) ||
          []
      };
    default:
      return state;
  }
};

export default reducers;
