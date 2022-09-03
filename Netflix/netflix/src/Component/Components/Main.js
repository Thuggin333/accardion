import React from "react";

export default function Main({ news, i }) {
  return (
    <div>
      <h3>
        {i + 1}:{news.title}
      </h3>
    </div>
  );
}
