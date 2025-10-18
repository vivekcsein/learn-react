import { useReducer } from "react";
import Button from "../../ui/Button";
import { HeadingText, HorizontalItemGroup } from "../../ui/StyledUI";

// Reducer function
const CounterReducer = (state: { count: number }, action: { type: "increment" | "decrement" }) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count > 0 ? state.count - 1 : 0 };
    default:
      return state;
  }
};

// Component
const CounterAppUsingReducer = () => {
  const [state, dispatch] = useReducer(CounterReducer, { count: 0 });

  return (
    <HorizontalItemGroup>
      <Button onClick={() => dispatch({ type: "increment" })}>Add</Button>
      <HeadingText>{state.count}</HeadingText>
      <Button onClick={() => dispatch({ type: "decrement" })}>Sub</Button>
    </HorizontalItemGroup>
  );
};

export default CounterAppUsingReducer;
