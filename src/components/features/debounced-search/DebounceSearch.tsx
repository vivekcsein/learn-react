import { useEffect, useState } from "react";
import Input from "../../ui/Input";
import useDebounce from "../../hooks/useDebounce";
import useHttpRequest from "../../hooks/useHttpRequest";
import { apiURL } from "../../../packages/configs/config.app";
import { HeadingText, ParaText } from "../../ui/StyledUI";

type ResponseType = { id: number; name: string; age: number };
type ErrorType = { message: string };

const DebounceSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const { debouncedValue } = useDebounce(inputValue, 330);
  const { data, sendHttpRequest, isLoading, error } = useHttpRequest();
  const newData = data as ResponseType | null;
  const newError = error as ErrorType | null;

  useEffect(() => {
    if (debouncedValue) {
      const url = `${apiURL}/${debouncedValue}`;
      sendHttpRequest({ url });
    }
  }, [debouncedValue, sendHttpRequest]);

  return (
    <>
      <HeadingText>Debounced Searching...</HeadingText>
      <Input
        id="search"
        type="number"
        placeholder="Search by number"
        value={inputValue}
        onChange={(e) => {
          const value = e.target.value as string;
          const valueNumber = Number(value);
          setInputValue(valueNumber > 1 ? value : "1");
        }}
      />
      <div>
        <HeadingText>Results:</HeadingText>
        {isLoading && <p>Loading...</p>}
        {newError && <p>Error: {newError.message}</p>}
        {!isLoading && !error && data ? (
          <HeadingText>
            Person name is : <span className="name">{newData?.name} </span>
          </HeadingText>
        ) : (
          <ParaText>No results yet.</ParaText>
        )}
      </div>
    </>
  );
};

export default DebounceSearch;
