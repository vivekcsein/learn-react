import Apicall from "../features/custom-hook/Apicall";
import { CenteredFlexContainer, HeadingText, VerticalItemGroup } from "../ui/StyledUI";

const CustomHookPage = () => {
  return (
    <CenteredFlexContainer>
      <VerticalItemGroup>
        <HeadingText>Api call using custom useFetch hook</HeadingText>
        <Apicall />
      </VerticalItemGroup>
    </CenteredFlexContainer>
  );
};

export default CustomHookPage;
