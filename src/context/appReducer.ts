import { Action } from "../interfaces/IAppReducer";
import { IAppState } from "../interfaces/iAppState";

const appReducer = (state: IAppState, action: Action) => {
  switch (action.type) {
    case "addCart": 
    return {
      ...state, cart: [ ...state.cart, action.payload ]
    }
    default:
        return {...state}
  }
};

export default appReducer;
