function SearchResult({ restaurantData }) {
  return (
    <>
      {restaurantData.map((res, index) => {
        return (
          <a
            href={res.restaurant.url}
            target="blank"
            key={index}
            className="col-sm-6 col-lg-4"
          >
            <div
              style={{ height: "283px" }}
              className="card ribbon-box d-block"
            >
              <img
                className="card-img-top"
                src={res.restaurant.thumb}
                alt="Card  cap"
                height="140"
              />
              <div className="card-body">
                <div
                  className={`ribbon float-end ${
                    res.restaurant.user_rating.aggregate_rating < 3.5 &&
                    "ribbon-danger"
                  }
                     ${
                       res.restaurant.user_rating.aggregate_rating > 4 &&
                       "ribbon-success"
                     }
                     ${
                       (res.restaurant.user_rating.aggregate_rating > 3.5) &
                         (res.restaurant.user_rating.aggregate_rating < 4.05) &&
                       "ribbon-warning"
                     }`}
                >
                  <i className="mdi mdi-account-star me-1"></i>
                  {res.restaurant.user_rating.aggregate_rating}
                </div>
                <h5
                  title={res.restaurant.name}
                  className="card-title multi-ellipsis"
                >
                  {res.restaurant.name}
                </h5>
                <p
                  title={res.restaurant.location.address}
                  className="card-text multi-ellipsis"
                >
                  {res.restaurant.location.address}
                </p>
                {/* <a href="/" className="btn btn-primary">
                      Button
                    </a> */}
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
}

export default SearchResult;
