import { useReducer } from "react";
import { IAppState } from "../interfaces/iAppState";
import AppContext from "./AppContext";
import appReducer from "./appReducer";

function AppState(props: { children: React.ReactNode }): JSX.Element {
  const appInitState: IAppState = {cart:[]};

  const [appState, appDispatch] = useReducer(appReducer, appInitState);
  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppState;
