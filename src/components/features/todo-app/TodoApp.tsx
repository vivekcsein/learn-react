import { useState, useRef, useCallback } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
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

const TodoApp = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [todoList, setTodoList] = useState<todoType[]>([]);

  const addTodo = useCallback(() => {
    const value = inputRef?.current?.value?.trim();
    if (!value) return;

    const newTodo: todoType = {
      id: Date.now(), // unique ID using timestamp
      value,
    };

    setTodoList((prev) => [...prev, newTodo]);
    if (inputRef.current) inputRef.current.value = ""; // clear input
  }, []);

  const removeTodo = useCallback(
    (id: number) => {
      const newList = todoList.filter((todo) => todo.id !== id);
      setTodoList(newList);
    },
    [todoList]
  );

  return (
    <>
      <VerticalListGroup>
        <Input ref={inputRef} id={""} />
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

export default TodoApp;
