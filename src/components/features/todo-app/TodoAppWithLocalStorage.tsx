import { useState, useRef, useCallback } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { setLocalStorageItem, getLocalStorageItem } from "../../../packages/utils/utils.storage";

import {
  HorizontalItemGroup,
  ParaText,
  VerticalListGroup,
  VerticalListItems,
} from "../../ui/StyledUI";

interface todoType {
  id: number;
  value: string;
}

const TodoAppWithLocalStorage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [todoList, setTodoList] = useState<todoType[]>(() => getLocalStorageItem("todoList", []));

  const addTodo = useCallback(() => {
    const value = inputRef?.current?.value?.trim();
    if (!value) return;

    const newTodo: todoType = {
      id: Date.now(),
      value,
    };

    const updatedList = [...todoList, newTodo];
    setTodoList(updatedList);
    setLocalStorageItem("todoList", updatedList);

    if (inputRef.current) inputRef.current.value = "";
  }, [todoList]);

  const removeTodo = useCallback(
    (id: number) => {
      const updatedList = todoList.filter((todo) => todo.id !== id);
      setTodoList(updatedList);
      setLocalStorageItem("todoList", updatedList);
    },
    [todoList]
  );

  return (
    <>
      <VerticalListGroup>
        <Input ref={inputRef} />
        <Button label="add todo" onClick={addTodo} />
        <VerticalListItems>
          {todoList.map((item) => (
            <HorizontalItemGroup key={item.id}>
              <ParaText>{item.value}</ParaText>
              <span className="cancel_btn" onClick={() => removeTodo(item.id)}>
                clear
              </span>
            </HorizontalItemGroup>
          ))}
        </VerticalListItems>
      </VerticalListGroup>
    </>
  );
};
export default TodoAppWithLocalStorage;
