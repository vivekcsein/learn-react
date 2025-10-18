import TodoApp from "../features/todo-app/TodoApp";
import TodoAppWithLocalStorage from "../features/todo-app/TodoAppWithLocalStorage";
import { CenteredFlexContainer, HeadingText, VerticalItemGroup } from "../ui/StyledUI";

const TodoPage = () => {
  return (
    <>
      <CenteredFlexContainer>
        <div>
          <VerticalItemGroup>
            <HeadingText>Todo app</HeadingText>
            <TodoApp />
            <HeadingText>Todo app featuring local storage</HeadingText>
            <TodoAppWithLocalStorage />
          </VerticalItemGroup>
        </div>
      </CenteredFlexContainer>
    </>
  );
};

export default TodoPage;
