import PropTypes from "prop-types";

function Card({ row, width, title, children }) {
  if (row) {
    return (
      <>
        <div className="row">
          <div className={width}>
            <div className="card">
              <div className="card-body">
                <div className="row">{children}</div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4 col-xxl-2"></div> */}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={width}>
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h4 className="header-title">{title}</h4>
              </div>

              {children}
            </div>
          </div>
        </div>
      </>
    );
  }
}

Card.propTypes = {
  width: PropTypes.string,
};

Card.defaultProps = {
  width: "col-xxl-10 col-lg-8",
  row: false,
};
export default Card;
