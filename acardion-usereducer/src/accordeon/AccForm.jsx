import React, { useState } from "react";
import "./css/style.css";
export default function AccForm({ dispatch }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changArea = (e) => {
    setText(e.target.value);
  };
  const addAcc = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD",
      payload: {
        addedItem: {
          id: Math.random(),
          title: title,
          content: text,
          isActive: false,
        },
      },
    });
    setTitle("");
    setText("");
  };
  return (
    <form onSubmit={addAcc}>
      <input
        placeholder="Type your text"
        type="text"
        value={title}
        onChange={changeTitle}
      />
      <textarea value={text} onChange={changArea} cols="30" rows="5"></textarea>
      <button>ADD</button>
    </form>
  );
}
