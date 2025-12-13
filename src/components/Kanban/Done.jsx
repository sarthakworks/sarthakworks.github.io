function Done({ Taskdata, handleDelete }) {
  return (
    <>
      <div
        className="tasks"
        data-plugin="dragula"
        data-containers='["task-list-one", "task-list-two", "task-list-three", "task-list-four"]'
      >
        <h5 className="mt-0 task-header">DONE (3)</h5>
        <div id="task-list-one" className="task-list-items">
          {/* Task Item */}
          {Taskdata.filter((i) => i.step.toLowerCase() === "done").map(
            (item) => (
              <div key={item.id} className="card mb-0">
                <div className="card-body p-3">
                  <small className="float-end text-muted">{item.date}</small>
                  <span
                    className={`badge ${
                      item.priority.toLowerCase() == "high" && "bg-danger"
                    } ${item.priority.toLowerCase() == "low" && "bg-success"} ${
                      item.priority.toLowerCase() == "medium" &&
                      "bg-secondary text-light"
                    }`}
                  >
                    {item.priority}
                  </span>
                  <h5 className="mt-2 mb-2">
                    <a
                      href="#!"
                      data-bs-toggle="modal"
                      data-bs-target="#task-detail-modal"
                      className="text-body"
                    >
                      {item.title}
                    </a>
                  </h5>
                  <p className="mb-0">
                    <span className="pe-2 text-nowrap mb-2 d-inline-block">
                      <i className="mdi mdi-briefcase-outline text-muted" />
                      {item.project}
                    </span>
                    <span className="text-nowrap mb-2 d-inline-block">
                      <i className="mdi mdi-comment-multiple-outline text-muted" />
                      <b>{item.comments}</b> Comments
                    </span>
                  </p>
                  <div className="dropdown float-end">
                    <a
                      href="#!"
                      className="dropdown-toggle text-muted arrow-none"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dots-vertical font-18" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      {/* item*/}
                      <a href="#!" className="dropdown-item">
                        <i className="mdi mdi-pencil me-1" />
                        Edit
                      </a>
                      {/* item*/}
                      <a
                        href="#!"
                        onClick={() => handleDelete(item.id)}
                        className="dropdown-item"
                      >
                        <i className="mdi mdi-delete me-1" />
                        Delete
                      </a>
                      {/* item*/}
                      <a href="#!" className="dropdown-item">
                        <i className="mdi mdi-plus-circle-outline me-1" />
                        Add People
                      </a>
                      {/* item*/}
                      <a href="#!" className="dropdown-item">
                        <i className="mdi mdi-exit-to-app me-1" />
                        Leave
                      </a>
                    </div>
                  </div>
                  <p className="mb-0">
                    <img
                      src="/assets/images/users/avatar-2.png"
                      alt="user-img"
                      className="avatar-xs rounded-circle me-1"
                    />
                    <span className="align-middle">{item.owner}</span>
                  </p>
                </div>
                {/* end card-body */}
              </div>
            )
          )}
          {/* Task Item End */}
        </div>
        {/* end company-list-1*/}
      </div>
    </>
  );
}

export default Done;
