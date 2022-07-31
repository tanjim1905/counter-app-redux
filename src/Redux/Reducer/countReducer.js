import { DECREMENT, INCREMENT, RESET } from "../Constants/Constants";

const counterInitialState = {
  count: 0,
};

export const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};
