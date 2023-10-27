import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addTask } from "../reducers/TodoSlice";

const TodoInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      alert("Enter a task before adding!");
      setValue("");
      return;
    }
    dispatch(addTask({ task: value }));
    setValue("");
  };

  return (
    <form onSubmit={onSubmit} className="todo__input">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Add a task here..."
        name="content"
      />
      <button type="submit" className="btn btn-default">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
};

export default TodoInput;
