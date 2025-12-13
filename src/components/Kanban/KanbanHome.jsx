import { v4 as uuidv4 } from "uuid";
import KanbanForm from "./KanbanForm";
import Todo from "./Todo";
import TaskData from "./data/Data";
import { useEffect, useState } from "react";
import Inprogress from "./Inprogress";
import Done from "./Done";
import Review from "./Review";
import { Link } from "react-router-dom";

function KanbanHome() {
  const [Taskdata, setTaskdata] = useState(TaskData);

  const addtask = (newTaskdata) => {
    newTaskdata.id = uuidv4();
    setTaskdata([newTaskdata, ...Taskdata]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setTaskdata(Taskdata.filter((item) => item.id !== id));
    }
  };
  useEffect(() => {
    // console.log(Taskdata);
  }, []);
  return (
    <>
      <div className="container-fluid">
        {/* start page title */}
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/">Apps</Link>
                  </li>
                  <li className="breadcrumb-item active">Kanban Board</li>
                </ol>
              </div>
              <h4 className="page-title">
                Kanban Board
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#add-new-task-modal"
                  className="btn btn-success btn-sm ms-3"
                >
                  Add New
                </button>
              </h4>
            </div>
          </div>
        </div>
        {/* end page title */}
        <div className="row">
          <div className="col-12">
            <div className="board">
              <Todo Taskdata={Taskdata} handleDelete={deleteFeedback} />
              <Inprogress Taskdata={Taskdata} handleDelete={deleteFeedback} />
              <Review Taskdata={Taskdata} handleDelete={deleteFeedback} />
              <Done Taskdata={Taskdata} handleDelete={deleteFeedback} />
            </div>
            {/* end .board*/}
          </div>
          {/* end col */}
        </div>
        {/* end row*/}
      </div>
      <KanbanForm handleAdd={addtask} />
    </>
  );
}

export default KanbanHome;
