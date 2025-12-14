import Card from "../shared/Card";
import codeCssGridPng from "../assets/images/code/css/grid.png";
import codeCssScssPng from "../assets/images/code/css/scss.png";

function Html() {
  const half = "col-lg-6";
  const full = "col-lg-12";
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <Card width={half} title="Local storage">
              <ul>
                <li>Browser storage to store data in key value pair</li>
                <li>10MB data can be stored with No expiration date</li>
                <li>
                  <p className="text-primary fw-bold mb-1 d-block">
                    localStorage.setItem("lastname", "bansal");
                    <br />
                    localStorage.getItem("lastname"); <br />
                    localStorage.removeItem("lastname");
                    <br />
                  </p>
                </li>
              </ul>
            </Card>
            <Card width={half} title="Session storage">
              <ul>
                <li>Similar to Local storage but for a session only</li>
                <li>data will be removed once tab or browser is closed</li>
                <li>
                  <p className="text-primary fw-bold mb-1 d-block">
                    sessionStorage.setItem("lastname", "bansal");
                    <br />
                    sessionStorage.getItem("lastname"); <br />
                    sessionStorage.removeItem("lastname");
                    <br />
                  </p>
                </li>
              </ul>
            </Card>
            <Card width={half} title="Cookies More secure">
              <ul>
                <li>
                  Key-value storage that stores values as string and Up to 4KB
                  data can be stored
                </li>
                <li>
                  Have expiration time, if no expiration time is given then the
                  cookie will get expired at the end of the browser session.
                </li>
                <li>
                  They reduce manipulation by client-side JavaScript: You can
                  restrict client-side access by setting the HttpOnly flag. So
                  they prevent client side scripting attacks
                </li>
                <li>
                  If you need to store data that is accessible for both the
                  server and the client, use cookies. Otherwise, use local
                  storage.
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">Uses : </span>
                  Storing User Preferences , jwt tokens , session status
                </li>
                <li>
                  <p className="text-primary fw-bold mb-1 d-block">
                    document.cookie="name=sarthak"
                  </p>
                </li>
              </ul>
            </Card>
            <Card width={half} title="IndexedDB">
              <ul>
                <li>Can store both objects and key-value pairs Up to 250MB</li>
                <li>Do not have expiration time unless explicit deletion</li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">Uses : </span>
                  When need to store a large number of objects which is
                  time-consuming and a lag on performance to convert to string
                  for Local Storage every time.
                </li>
              </ul>
            </Card>

            <Card width={full} title="Flexbox">
              <h5 className="text-primary">
                Parent element or Flex-container properties:
              </h5>
              <ul>
                <li>
                  <span className="text-primary">display : flex;</span>
                </li>
                <li>
                  <span className="text-primary">flex-direction: row;</span>
                  //wrap , wrap-reverse
                </li>
                <li>
                  <span className="text-primary"> flex-wrap: nowrap</span>
                </li>
                <li>
                  <span className="text-primary">flex-flow: row nowrap; </span>
                  shorthand for setting both flex-direction and flex-wrap
                </li>
                <li>
                  <span className="text-primary">
                    justify-content: flex-start;
                  </span>
                  <span>
                    //(Horizontally aligns ) flex-end , space-around,
                    space-between ,space-evenly ,center, right , left
                  </span>
                </li>
                <li>
                  <span className="text-primary">align-items: stretch;</span>
                  <span>
                    //(Vertically aligns) center , flex-start , flex-end ,
                    baseline
                  </span>
                </li>
                <li>
                  <span className="text-primary">align-content: </span>
                </li>
              </ul>
              <h5 className="text-primary">
                child element or Flex-item properties:
              </h5>
              <ul>
                <li>
                  <span className="text-primary">align-self</span>
                  <span className="text-muted">
                    Specifies the alignment for a flex item (overrides the flex
                    container's align-items property)
                  </span>
                </li>
                <li>
                  <span className="text-primary">flex-basis :200px</span>
                  <span className="text-muted">
                    Specifies the initial length of a flex item
                  </span>
                </li>
                <li>
                  <span className="text-primary">flex-grow :0</span>
                  <span className="text-muted">
                    Specifies how much a flex item will grow relative to the
                    rest of the flex items inside the same container
                  </span>
                </li>
                <li>
                  <span className="text-primary">flex-shrink:0</span>
                  <span className="text-muted">
                    Specifies how much a flex item will shrink relative to the
                    rest of the flex items inside the same container
                  </span>
                </li>
                <li>
                  <span className="text-primary">flex: grow shrink basis</span>
                  <span className="text-muted">
                    {" "}
                    A shorthand property for the flex-grow, flex-shrink, and the
                    flex-basis properties
                  </span>
                </li>
                <li>
                  <span className="text-primary">order</span>
                  <span className="text-muted">
                    Specifies the order of the flex items inside the same
                    container
                  </span>
                </li>
              </ul>
            </Card>
            <Card width={full} title="Grid Layout">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src={codeCssGridPng}
              />
            </Card>
            <Card width={half} title="SASS /SCSS">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src={codeCssScssPng}
              />
            </Card>
            <Card width={half} title="Accessibility">
              <h5 className="text-danger">in progress</h5>
            </Card>
            <Card width={half} title="Browser Api">
              <h5 className="text-danger">in progress</h5>
            </Card>
            <Card width={half} title="Data attribute">
              <p>
                Data-attributes-The data-* attribute is used to store custom
                data private to the page or application.
              </p>
              <p>
                The stored (custom) data can then be used in the page's
                JavaScript to create a more engaging user experience (without
                any Ajax calls or server-side database queries).
              </p>
              <p className="text-danger">
                {`<div id='person' data-name="sarthak" data-age="28">
                  …
                </div>`}{" "}
                <br />
                {`element.dataset.name; // "sarthak"`}
              </p>
            </Card>
            <Card width={half} title="Defer Async">
              <div>
                When the browser loads HTML and comes across a
                <span className="text-muted">{"  <script>...</script> "}</span>
                tag, it can't continue building the DOM. It must execute the
                script first internal or external doesnt matter.it leads to some
                problems.
                <ul>
                  <li>
                    Scripts can't find DOM elements below them, so they can't
                    add handlers etc.
                  </li>
                  <li>
                    it make websit load slower as script is blocking page load
                  </li>
                </ul>
              </div>
              <h5 className="text-primary">Defer (better in most cases)</h5>
              <p>
                with defer attribute browser donot wait for the script to load
                Instead, the browser will continue to process the HTML & build
                DOM. The script loads “in the background”, and then runs when
                the DOM is fully built. Scripts with defer always execute when
                the DOM is ready (but before DOMContentLoaded event). They
                executed in Document order
              </p>
              <h5 className="text-primary">Async</h5>
              <p>
                Similar to defer, async scripts load in the background and run
                when ready.Load-first order. Their document order doesn't matter
                - which loads first runs first
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Html;
