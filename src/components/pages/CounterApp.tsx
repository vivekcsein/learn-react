import { CenteredFlexContainer, HeadingText } from "../ui/StyledUI";
import CounterAppUsingReducer from "../features/counter-app/CounterAppUsingReducer";
import CounterAppUsingUseState from "../features/counter-app/CounterAppUsingUseState";

const CounterApp = () => {
  return (
    <div>
      <HeadingText>Counter App using useState</HeadingText>
      <CenteredFlexContainer>
        <div>
          <CounterAppUsingUseState />
        </div>
      </CenteredFlexContainer>
      <HeadingText>Counter App using useReducer</HeadingText>
      <CenteredFlexContainer>
        <div>
          <CounterAppUsingReducer />
        </div>
      </CenteredFlexContainer>
    </div>
  );
};

export default CounterApp;
