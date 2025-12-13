function InitialPage() {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="text-center">
          <img
            src="/assets/images/file-searching.svg"
            height={90}
            alt="File not found "
          />
          <h1 className="text-error mt-4">YUMMY!!</h1>
          <h4 className="text-uppercase text-danger mt-3">
            Try Searching your Favorite Restaurants or Food
          </h4>
          <p className="text-muted mt-3">
            Information about your favorite food or restaurants is just a click
            away. Selet a city and type your restaurant or food in seacrh bar on
            left and information will appear after just clicking search button.
          </p>
        </div>
        {/* end /.text-center*/}
      </div>
      {/* end col*/}
    </div>
  );
}

export default InitialPage;
