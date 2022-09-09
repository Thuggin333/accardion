import React from "react";
import "./css/style.css";
export default function AccItem({ item, dispatch }) {
  const { id, title, content, isActive } = item;
  const goOpen = () => {
    dispatch({
      type: "OPEN",
      payload: {
        id: id,
        newItem: { ...item, isActive: !isActive },
      },
    });
  };
  const goDelete = () => {
    dispatch({
      type: "DELETE",
      payload: {
        id: id,
      },
    });
  };

  return (
    <div className="oneAcc">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h5>{title}</h5>
        <span onClick={goOpen}>{isActive ? "-" : "+"}</span>
        <span onClick={goDelete}>X</span>
      </div>
      {isActive && <p className="content">{content}</p>}
    </div>
  );
}
