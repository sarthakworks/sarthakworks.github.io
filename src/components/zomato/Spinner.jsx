function Spinner() {
  const item = [1, 2, 3, 4, 5, 6];
  return (
    // <div className="h-75 flex-center f-column">
    //   <div className="col-lg-8">
    //     <div className="text-center flex-center f-column ">
    //       <div className="loader"></div>
    //       <h1 className="text-error mt-4">Searching</h1>
    //     </div>
    //     {/* end /.text-center*/}
    //   </div>
    //   {/* end col*/}
    // </div>

    <>
      {item.map((value, i) => {
        return (
          <div key={i} className="col-sm-6 col-lg-4 mb-3 ">
            <div
              className="card card ribbon-box border shadow-none mb-0"
              aria-hidden="true"
            >
              <img
                src="/assets/images/loadingfood2.gif"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div
                  className="ribbon float-end false
               false
               ribbon-info"
                >
                  <i className="mdi mdi-account-star me-1" />
                </div>

                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6" />
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7" />
                  <span className="placeholder col-4" />
                  <span className="placeholder col-4" />
                  <span className="placeholder col-6" />
                  <span className="placeholder col-8" />
                </p>
                {/* <a
                  href="#!"
                  tabIndex={-1}
                  className="btn btn-primary disabled placeholder col-6"
                ></a> */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Spinner;
