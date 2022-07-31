import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    decrementCounterAction,
    incrementCounterAction,
    resetCounterAction
} from "../Redux/Actions/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounterAction());
  };
  const handleDecrement = () => {
    dispatch(decrementCounterAction());
  };
  const handleReset = () => {
    dispatch(resetCounterAction());
  };
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} disabled={count === 0}>
        Decrement
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
