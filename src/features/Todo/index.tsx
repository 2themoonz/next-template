import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { getAllTodo } from "@/redux/actions";
import { ITodo } from "@/types";

function Todo() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllTodo());
  }, [dispatch]);

  const { loading, todos } = useSelector((state: RootState) => ({
    todos: state.Todo.todos,
    loading: state.Todo.loading,
  }));

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {todos.map((todo: ITodo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todo;
