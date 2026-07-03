import Button from "../../ui/Button.tsx";
import { apiURL } from "../../../packages/configs/config.app.ts";
import useHttpRequest from "../../hooks/useHttpRequest.tsx";
import {
  VerticalItemGroup,
  VerticalListItems,
  HorizontalItemGroup,
  CenteredFlexContainer,
  HeadingText,
  VerticalListGroup,
} from "../../ui/StyledUI.tsx";

type ResponseType = { id: number; name: string; age: number };
type ErrorType = { message: string };

const Apicall = () => {
  const { data, sendHttpRequest, isLoading, error } = useHttpRequest();
  const newData = data as ResponseType | null;
  const newError = error as ErrorType | null;

  return (
    <CenteredFlexContainer>
      <VerticalItemGroup>
        <Button onClick={() => sendHttpRequest({ url: apiURL })} label="Fetch Data" />
        <br />
        {newError && <p>Error: {newError.message}</p>}
        {isLoading && <p>Loading...</p>}
        {newData && Array.isArray(newData) && (
          <VerticalListGroup>
            <HeadingText>List of Names</HeadingText>
            {newData.map((item) => (
              <CenteredFlexContainer>
                <div>
                  <HorizontalItemGroup key={item.id}>
                    <VerticalListItems>{item.name}</VerticalListItems>
                  </HorizontalItemGroup>
                </div>
              </CenteredFlexContainer>
            ))}
          </VerticalListGroup>
        )}
      </VerticalItemGroup>
    </CenteredFlexContainer>
  );
};

export default Apicall;
