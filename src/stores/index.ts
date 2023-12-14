import { combineReducers } from "redux";
import NowMediaQueryReducer from "./nowMediaQueryReducer";

const rootReducer = combineReducers({
    NowMediaQueryReducer,
});

export default rootReducer;
export type RootReducerType = ReturnType<typeof rootReducer>;
