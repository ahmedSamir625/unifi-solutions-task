import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "../organizms/TodoItem";

const TodoPage = () => {
  const todoList = useSelector((state) => state.todo);

  console.log("todo : ", todoList);

  return (
    <div className="container mx-auto px-2 lg:px-0">
      {todoList.map((todo) => (
        <TodoItem todo={todo} key={todo.title} />
      ))}
    </div>
  );
};

export default TodoPage;
