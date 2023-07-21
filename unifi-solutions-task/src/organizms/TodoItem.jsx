import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import { IconButton } from "@material-ui/core";
import { checkTodo, removeTodo, archiveTodo } from "../redux/reducers/todoSlice";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import TodoDetailsModal from "./todoDetailsModal";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const closeModel = () => {
    setOpenModal(false);
  };

  const isDark = useSelector((state) => state.theme.darkMode);
  console.log("isDark : ",isDark);
  return (
    <>
      <div
        className="px-10 py-5 mt-4 shadow-md drop-shadow-md rounded-md flex flex-col lg:flex-row justify-between hover:bg-slate-200"
        style={{ opacity: todo.isArchived ? ".5" : "1" , backgroundColor:isDark?"#344256":"white" , color: isDark?"white":"black"}}
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <div className="w-full lg:w-3/4">
          <div className="font-bold text-base">{todo.title}</div>
          <p>{todo.desc}</p>
        </div>

        <div className="lg:w-[300px] flex justify-end items-center w-full">
          <IconButton
            color="primary"
            onClick={() => {
              dispatch(
                removeTodo({
                  todoTitle: todo.title,
                })
              );
            }}
          >
            <DeleteIcon />
          </IconButton>

          {todo.isArchived ? (
            <IconButton
              color="primary"
              onClick={() => {
                dispatch(
                  archiveTodo({
                    todoTitle: todo.title,
                    isArchived: false,
                  })
                );
              }}
            >
              <UnarchiveIcon />
            </IconButton>
          ) : (
            <IconButton
              color="primary"
              onClick={() => {
                dispatch(
                  archiveTodo({
                    todoTitle: todo.title,
                    isArchived: true,
                    archivedAt: Date.now(),
                  })
                );
              }}
            >
              <ArchiveIcon />
            </IconButton>
          )}

          <span className="ml-5">
            <Checkbox
              onChange={(e) => {
                dispatch(
                  checkTodo({
                    todoTitle: todo.title,
                    isChecked: !todo?.isArchived,
                    checkedAt: Date.now(),
                  })
                );
              }}
            />
          </span>
        </div>
      </div>
      <TodoDetailsModal todo={todo} isOpen={openModal} handleOpenDetails={closeModel} />
    </>
  );
};

export default TodoItem;
