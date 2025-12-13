import { useState } from "react";

function KanbanForm({ handleAdd }) {
  const [desc, setDesc] = useState("Description");
  const [priority, setPriority] = useState("High");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [owner, setOwner] = useState("sarthak");
  const [title, setTitle] = useState("Web Development");
  const [date, setDate] = useState("12-04-2023");
  const [project, setProject] = useState("IOS");
  const [step, setStept] = useState("todo");

  const handleProjectChange = (e) => {
    setProject(e.target.value);
  };
  const handleOwnerChange = (e) => {
    setOwner(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleStepChange = (e) => {
    setStept(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      priority,
      project,
      title,
      desc,
      owner,
      date,
      comments: 12,
      step,
    };
    handleAdd(newFeedback);
  };
  return (
    <>
      <div
        className="modal fade task-modal-content"
        id="add-new-task-modal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="NewTaskModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="NewTaskModalLabel">
                Create New Task
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} className="p-2">
                <div className="row">
                  <div className="col-md-8">
                    <div className="mb-3">
                      <label htmlFor="task-title" className="form-label">
                        Title
                      </label>
                      <input
                        onChange={handleTitleChange}
                        value={title}
                        type="text"
                        className="form-control form-control-light"
                        id="task-title"
                        placeholder="Enter title"
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="task-priority2" className="form-label">
                        Step
                      </label>
                      <select
                        onChange={handleStepChange}
                        value={step.toLowerCase}
                        className="form-select form-control-light"
                        id="task-priority2"
                      >
                        <option value="todo">TODO</option>
                        <option value="inprogress">IN Progress</option>
                        <option value="review">Review</option>
                        <option value="done">Done</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <div className="mb-3">
                      <label className="form-label">Project</label>
                      <select
                        onChange={handleProjectChange}
                        value={project}
                        className="form-select form-control-light"
                      >
                        <option>Select</option>
                        <option>Home - Admin Dashboard</option>
                        <option>CRM - Design &amp; Development</option>
                        <option>iOS - App Design</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="task-priority2" className="form-label">
                        Priority
                      </label>
                      <select
                        onChange={handlePriorityChange}
                        value={priority}
                        className="form-select form-control-light"
                        id="task-priority2"
                      >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="task-description" className="form-label">
                    Description
                  </label>
                  <textarea
                    onChange={handleDescChange}
                    value={desc}
                    className="form-control form-control-light"
                    id="task-description"
                    rows={3}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="task-title" className="form-label">
                        Assign To
                      </label>
                      <select
                        onChange={handleOwnerChange}
                        value={owner}
                        className="form-select form-control-light"
                        id="task-priority"
                      >
                        <option>Sarthak Bansal</option>
                        <option>Amit Singh</option>
                        <option>Manish Kumar</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="task-priority" className="form-label">
                        Due Date
                      </label>
                      <input
                        onChange={handleDateChange}
                        value={date}
                        type="text"
                        className="form-control form-control-light"
                        id="birthdatepicker"
                        data-toggle="date-picker"
                        data-single-date-picker="true"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    className="btn btn-light"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    data-bs-dismiss="modal"
                    className="btn btn-primary"
                    aria-label="Close"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
    </>
  );
}

export default KanbanForm;
