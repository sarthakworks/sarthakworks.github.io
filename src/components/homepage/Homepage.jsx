import Right from "./Right";
import Left from "./Left";

function Homepage() {
  return (
    <div className="content">
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-sm-12 col-xxl-8">
            <Right />
          </div>
          <div className="col-sm-12 col-xxl-4">
            <Left />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
