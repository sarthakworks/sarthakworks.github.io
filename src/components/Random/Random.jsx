import { Link } from "react-router-dom";
import Card from "../shared/Card";
import Api from "./projects/Api";
import Debounce from "./projects/Debounce";
import Main from "./projects/Explorer/main";
import Rating from "./projects/Rating";
import Search from "./projects/Search";
import Slideshow from "./projects/Slideshow";
import Stopwatch from "./projects/Stopwatch";
import Todo from "./projects/Todo";
import Virtualisation from "./projects/Virtualisation";
function Random() {
  const half = "col-lg-6";
  return (
    <>
      {" "}
      <div className="content">
        {/* <!-- Start Content--> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box">
                <div className="page-title-right">
                  <form className="d-flex">
                    <Link to="/" className="btn btn-primary ms-2">
                      <i className="mdi mdi-autorenew"></i>
                    </Link>
                  </form>
                </div>
                <h4 className="page-title">Small Projects</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {" "}
                <Card width={half} title="Stopwatch">
                  <Stopwatch />
                </Card>
                <Card width={half} title="Debounce / Throttle">
                  <Debounce />
                </Card>
                <Card width={half} title="Sort Api table">
                  <Api />
                </Card>
                <Card width={half} title="Todo List">
                  <Todo />
                </Card>
                <Card width={half} title="Search">
                  <Search />
                </Card>{" "}
                <Card width={half} title="Carousel">
                  <Slideshow />
                </Card>
                <Card width={half} title="Vs code like folder structure">
                  <Main />
                </Card>
                <Card width={half} title="Virtualization">
                  <Virtualisation />
                </Card>
                <Card width={half} title="Rating stars">
                  <Rating />
                </Card>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Random;
