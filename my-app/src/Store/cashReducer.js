const defaulState = {
    cash: 0,
  };
  
  export const cashReducer = (state = defaulState, action) => {
    switch (action.type) {
      case "addCash":
        return {
          ...state,
          cash: state.cash + action.payload,
        };
      case "getCash":
        return {
          ...state,
          cash: state.cash - action.payload,
        };
        case "addText":
          return{
            ...state,
            cash: action.payload
          }
  
      default:
        return state;
    }
  };