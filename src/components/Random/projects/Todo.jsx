import React, { useState, useEffect } from "react";

function Todo() {
  const [todo, setTodo] = useState(["washing", "clothings", "iron"]);
  const [text, setText] = useState("");
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(false);

  function addTask(e) {
    if (e.key === "Enter" && !todo.includes(text)) {
      setTodo([...todo, text]);
    }
  }

  function deleteme(i) {
    setTodo(todo.filter((j) => j !== i));
  }
  function handleEdit() {
    setEdit(false);
    let temp = [...todo];
    temp[edit] = editText;
    setTodo(temp);
  }
  return (
    <div className="col-lg-8">
      <div className="input-group mb-2 ">
        <input
          className="form-control"
          placeholder="type.."
          onChange={(e) => setText(e.target.value)}
          onKeyPress={addTask}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add
        </button>
      </div>

      <ul className="list-group">
        {todo.map((i, index) => (
          <li
            className="text-capitalize list-group-item d-flex justify-content-between align-items-center"
            key={index}
          >
            {edit === index ? (
              <div className="col-lg-10">
                <div className="input-group">
                  <input
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search ..."
                    aria-label="Recipient's username"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleEdit()}
                  />
                  {/* <span className="mdi mdi-magnify search-icon" /> */}
                  <button
                    onClick={handleEdit}
                    className="input-group-text btn-dark mdi mdi-content-save-outline"
                    type="submit"
                  ></button>
                </div>
              </div>
            ) : (
              i
            )}
            <div>
              {" "}
              <span
                title="edit"
                onClick={() => {
                  setEdit(index);
                  setEditText(i);
                }}
                className="pointer link-success font-20 mdi mdi-pencil-outline"
              ></span>
              <span
                title="delete"
                onClick={() => deleteme(i)}
                className="pointer link-danger font-20 mdi mdi-delete"
              ></span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
