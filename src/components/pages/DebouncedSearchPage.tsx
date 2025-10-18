import DebounceSearch from "../features/debounced-search/DebounceSearch";
import { CenteredFlexContainer, VerticalItemGroup } from "../ui/StyledUI";

const DebouncedSearchPage = () => {
  return (
    <>
      {
        <CenteredFlexContainer>
          <div>
            <VerticalItemGroup>
              <DebounceSearch />
            </VerticalItemGroup>
          </div>
        </CenteredFlexContainer>
      }
    </>
  );
};

export default DebouncedSearchPage;
