import { useState } from "react";
import Button from "../../ui/Button";
import { HeadingText, HorizontalItemGroup } from "../../ui/StyledUI";

const CounterAppUsingUseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <HorizontalItemGroup>
      <Button onClick={increment}>Add</Button>
      <HeadingText>{count}</HeadingText>
      <Button onClick={decrement}>Sub</Button>
    </HorizontalItemGroup>
  );
};

export default CounterAppUsingUseState;
