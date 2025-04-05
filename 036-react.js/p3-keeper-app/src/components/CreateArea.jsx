import React, { useState } from "react";

function CreateArea(p) {

  const [note, setNote] = useState(
    {
      title: "",
      content: ""
    }
  );

  function createNewNote(event) {
    p.onAdd(note);
    setNote(
      {
        title: "",
        content: ""
      }
    );
    event.preventDefault();
    // const form = new FormData(event.target);
    // const data = Object.fromEntries(form.entries());
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(preValue => ({ ...preValue, [name]: value }));
  }

  return (
    <div>
      <form onSubmit={createNewNote} >
        <input onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title" />
        <textarea onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..." rows="5" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
