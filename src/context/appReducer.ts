import { Action } from "../interfaces/IAppReducer";
import { IAppState } from "../interfaces/iAppState";

const appReducer = (state: IAppState, action: Action) => {
  switch (action.type) {
    default:
        return {...state}
  }
};

export default appReducer;
