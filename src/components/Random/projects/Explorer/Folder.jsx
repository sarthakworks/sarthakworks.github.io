import { useState } from "react";

function Folder({ handleInsertNode, explorer }) {
  //   console.log(explorer);
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div
          className="folder"
          onClick={() => setExpand(!expand)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setExpand(!expand);
            }
          }}
        >
          <span className="font-20 mdi mdi-folder-outline">
            {" "}
            {explorer.name}
          </span>

          <div>
            <span
              title="Add folder"
              className="mdi mdi-folder-plus-outline pointer link-primary font-20 "
              onClick={(e) => handleNewFolder(e, true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleNewFolder(e, true);
                }
              }}
            ></span>
            <span
              title="Add file"
              className="mdi mdi-note-plus-outline pointer link-primary font-20 "
              onClick={(e) => handleNewFolder(e, false)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleNewFolder(e, false);
                }
              }}
            >
              {" "}
            </span>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>
                {showInput.isFolder ? (
                  <span className="mdi mdi-folder-outline"></span>
                ) : (
                  <span className="mdi mdi-file-outline"></span>
                )}
              </span>
              <input
                type="text"
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                className="inputContainer__input"
              />
            </div>
          )}

          {explorer.items.map((exp) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                explorer={exp}
                key={exp.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span className="file">
        <span className="mdi mdi-file-outline">{explorer.name}</span>
      </span>
    );
  }
}

export default Folder;
