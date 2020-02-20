import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENTVIEW":
      return {
        ...state,
        currentView: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export default rootReducer;
