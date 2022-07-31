import { DECREMENT, INCREMENT, RESET } from "../Constants/Constants";

export const incrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementCounterAction = () => {
  return {
    type: DECREMENT,
  };
};
export const resetCounterAction = () => {
  return {
    type: RESET,
  };
};
