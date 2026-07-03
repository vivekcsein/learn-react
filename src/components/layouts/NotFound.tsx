import { CenteredFlexContainer, VerticalListGroup, VerticalListItems } from "../ui/StyledUI";

const NotFound = () => {
  return (
    <section>
      <CenteredFlexContainer>
        <VerticalListGroup>
          <VerticalListItems>Page is Not Found or under Development</VerticalListItems>
          <li>Error 404</li>
        </VerticalListGroup>
      </CenteredFlexContainer>
    </section>
  );
};

export default NotFound;
