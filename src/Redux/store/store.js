import { createStore } from "redux";
import { counterReducer } from "../Reducer/countReducer";

const store = createStore(counterReducer);
export default store;
