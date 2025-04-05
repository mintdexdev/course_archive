import React from "react";

function Note(p) {
  return (
    <div className="note">
      <h1>{p.title}</h1>
      <p>{p.content}</p>
    </div>
  );
}

export default Note;
