import Card from "../shared/Card";
import codeMiscBasicconfigPng from "../assets/images/code/misc/basicconfig.png";
import codeMiscServiceworker1Png from "../assets/images/code/misc/serviceworker1.png";
import codeMiscServiceworker2Png from "../assets/images/code/misc/serviceworker2.png";
import codeMiscServiceworker3Png from "../assets/images/code/misc/serviceworker3.png";
import codeMiscServiceworker4Png from "../assets/images/code/misc/serviceworker4.png";
function Misc() {
  const half = "col-lg-6";
  const full = "col-lg-12";
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <Card width={full} title="Optimisation Techniques">
              <ul className="row ">
                <div className="col-6">
                  {" "}
                  <li>Architecture - MicroFrontend for Feature Apps</li>
                  <li>Server side rendering</li>
                  <li>Latency - Debouncing/throttling, cdn, Caching</li>
                  <li>
                    Memoization , pure components , Web Workers for continously
                    runing scripts in background
                  </li>
                  <li>CSS Optimization using Minifiers , SCSS</li>
                  <li>Using Lighthouse to check various parameters</li>
                </div>
                <div className="col-6">
                  <li>
                    Webpack Treeshaking to remove unwanted code and to avoid
                    code duplication
                  </li>
                  <li>Lazy loading for heavy apps</li>
                  <li>
                    Event delegation for event on list of multiple child
                    elements
                  </li>
                  <li>
                    Using Sprite Images and implementing Virtualization/infinite
                    scroll for long list of data usind React-window npm package
                  </li>
                  <li>
                    Creating HOC for styled/repeatative components, Creating
                    Custom Hooks for Similar logical piece of code
                  </li>
                </div>
              </ul>
            </Card>
            <Card width={full} title="Optimisation of React">
              <div className="row container">
                <ul className="col-6">
                  <li>Memoize React Components</li>
                  <li>
                    Use Sprite image to minimise api calls for different icons
                  </li>
                  <li>
                    Use Pure components using React.PureComponent in class
                    components with custom shouldComponentUpdate method
                  </li>
                  <li>
                    we should React.memo with functional components. this way
                    renders doesnt run again and again is props passed to it are
                    not changed instead it will return cached value.
                  </li>
                  <li>using lazy loading</li>
                  <li>
                    {" "}
                    Using Web Workers for CPU Extensive Tasks. it run a script
                    operation in a web application’s background thread, separate
                    from the main execution thread.
                  </li>
                </ul>
                <ul className="col-6">
                  <li>
                    Use React.Fragments to Avoid Additional HTML Element
                    Wrappers
                  </li>
                  <li>Throttling and Debouncing Event Action in JavaScript</li>
                  <li>
                    use CDN like Akamai ,cloudflare to deliver static content
                    from your website as it uses users geographic location. CDN
                    closest to user is edge server.
                  </li>
                  <li>
                    spliting main chunk in production to smaller chunks using
                    webpack SplitChunksPlugin. we can consider having two
                    separate files by separating vendor, or third-party library
                    code from the application code.
                  </li>
                  <li>minify various files </li>
                </ul>
              </div>
            </Card>
            <Card width={full} title="History development approach and Webpack">
              <hr />
              <h5 className="text-primary fw-bold mb-1 ">
                1. Multiple file approach
              </h5>
              <p className="container">
                multiple js files (home.js cart.js order.js *.css etc). <br />
                <span className="text-danger fw-bold">disadvantage-</span>{" "}
                Network load, Hard to manage as order of load of js files lead
                to error
              </p>
              <h5 className="text-primary fw-bold mb-1 ">
                2. Lesser files approach
              </h5>
              <p className="container">
                Single or fewer js files(index.js main.css) <br />
                <span className="text-danger fw-bold">disadvantage-</span>
                difficult to debug and read as file size increased. scopping
                issue for variables.
              </p>
              <h5 className="text-primary fw-bold mb-1 ">3. Module patterns</h5>
              <p className="container">
                {" "}
                Different way to load file.Export from one js file and import in
                other js file that make our code more modular. <br />
                <span className="text-danger fw-bold">disadvantage-</span>: it
                uses Require keyword and browser doesn't understand what is
                require. Browser support to Commonjs Module Pattern using
                Require keyword was provide by requireJs library.
              </p>
              <h5 className="text-primary fw-bold mb-1 ">4. Webpack</h5>
              <div className="container">
                <span className="text-success fw-bold">Advantage-</span>:
                <ul>
                  <li>
                    Load all types of assest (js , css, fonts, images etc)in
                    modular format
                  </li>
                  <li>Dynamically building the dependencies graph</li>
                  <li>Removing unused code in a library</li>
                  <li>Removing the duplication of code</li>
                  <li>Fetching modules at runtime(module fedration)</li>
                </ul>
              </div>
            </Card>
            <Card width={half} title="Commonjs Modules">
              <hr />

              <div className="container">
                <span className="text-success fw-bold">Export </span>

                <ol>
                  <li>
                    function Subtract(a,b) return a-b; <br />
                    function Add(a,b) return a+b; <br />
                    Module.exports = {"{"} <br />
                    Subtract:SubtractDifferentName, <br />
                    add:addDifferentName {"}"};
                  </li>
                </ol>
                <span className="text-success fw-bold">Import </span>

                <ol>
                  <li>
                    const{"{"} Subtract ,add :add2 {"}"} =
                    require("./folder/Filename");{" "}
                  </li>
                </ol>
              </div>
            </Card>{" "}
            <Card width={half} title="EcmaScript 2015 /ES6 Modules">
              <hr />

              <div className="container">
                <span className="text-success fw-bold">Export </span>

                <ol>
                  <li>default export add;</li>
                  <li>export add;</li>
                  <li>
                    export {"{"}Add, Subtract{"}"};
                  </li>
                </ol>
                <span className="text-success fw-bold">Import </span>

                <ol>
                  <li>import add as newAdd from"./path/add";</li>
                  <li>
                    import {"{"} add {"}"} from"./path/add";
                  </li>
                  <li>
                    import {"{"} Add , Subtract{"}"} from"./path/add";
                  </li>
                </ol>
              </div>
            </Card>
            <Card width={full} title="How Webpack Works?">
              <hr />
              <h5 className="text-primary fw-bold mb-1 "> Webpack</h5>
              <div className="container">
                <span className="text-success fw-bold">Dependancy graph- </span>

                <ol>
                  <li>
                    in Webpack entry file is mort important point of start.
                  </li>
                  <li>
                    once it has entry file, it searchs all the import statements
                    and require statement that u have in file
                  </li>
                  <li>
                    and start fetching all those contents(like js files , css,
                    images etc).
                  </li>
                  <li>
                    and after that if fetch files also have import statements
                    then it also fetches those files and so on.
                  </li>
                  <li>
                    in this it creates a Dependancy graph and outputs few bundle
                    files for js and css etc.
                  </li>
                </ol>
              </div>
            </Card>
            <Card width={half} title="Basic Webpack configuration">
              <hr />
              <h5 className="text-primary fw-bold mb-1 "> Webpack</h5>
              <div className="container">
                <img
                  className="img-fit"
                  alt="infinite curring"
                  width="100"
                  src={codeMiscBasicconfigPng}
                />
              </div>
            </Card>
            <Card width={half} title="Handle file change">
              <hr />
              <h5 className="text-primary fw-bold mb-1 "> in progress</h5>
            </Card>
            <Card width={half} title="working with live streams">
              <hr />
              <h5 className="text-primary fw-bold mb-1 "> in progress</h5>
            </Card>
            <Card width={half} title="Web Workers">
              <hr />
              <p>
                A web worker is a JavaScript running in the background, without
                affecting the performance of the page. generally used for big
                CPU intensive tasks.
              </p>
              <ul>
                <li>
                  {" "}
                  create a new web worker that runs the code in the file named
                  background.js:
                  <span className="text-primary">
                    {" "}
                    var worker = new Worker("background.js");
                  </span>
                </li>
                <li>
                  To send data from webpage to a worker, you call the worker's
                  postMessage() using{" "}
                  <span className="text-primary">
                    worker.postMessage(myData);
                  </span>
                  The worker then receives an onMessage event that provides a
                  copy of the data.
                </li>
                <li>
                  Canceling a worker background task
                  <span className="text-primary">worker.terminate();</span>
                </li>
                <li>
                  The postMessage() function allows only a single value{" "}
                  <span className="text-primary">worker.postMessage(obj)</span>
                </li>
              </ul>
            </Card>
            <Card width={full} title="Service Workers">
              <hr />
              <p>
                A service worker is a script that runs independently in the
                browser background. On the user side, it can intercept its
                network requests and decide what to load (fetch). Service
                workers mainly used for background sync, push notification for
                'offline capabilities' in applications.
              </p>
              <p className="text-primary">
                You can see service-worker.js in the tab Devtools&gt;
                Application&gt; Service Worker:
              </p>
              <div className="row">
                <div className="col-6">
                  <h5 className="text-primary">Registration</h5>
                  <img
                    className="img-fit"
                    alt="infinite curring"
                    width="100"
                    src={codeMiscServiceworker1Png}
                  />
                </div>
                <div className="col-6">
                  <h5 className="text-primary">Installing</h5>
                  <img
                    className="img-fit"
                    alt="infinite curring"
                    width="100"
                    src={codeMiscServiceworker2Png}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <h5 className="text-primary">Activating</h5>
                  <img
                    className="img-fit"
                    alt="infinite curring"
                    width="100"
                    src={codeMiscServiceworker3Png}
                  />
                </div>
                <div className="col-6">
                  <h5 className="text-primary">Fetching event:</h5>
                  <img
                    className="img-fit"
                    alt="infinite curring"
                    width="100"
                    src={codeMiscServiceworker4Png}
                  />
                </div>
              </div>
            </Card>
            <Card width={half} title="PWA">
              <hr />
              <p>
                {" "}
                Progressive web app are installable web app that can also work
                without internet to some extent
              </p>
              <ol>
                <li>
                  First create normal react using or create using
                  cra-template-pwa
                  <br />
                  <span className="text-primary">
                    npx create-react-app react-pwa --template cra-template-pwa
                  </span>
                  <br />
                  cra-template-pwa is progressive web app template for Create
                  React App.
                </li>
                <li>
                  Register a service worker with
                  navigator.serviceWorker.register() <br />
                  or serviceWorkerRegistration.register() if using cra
                </li>

                <li>
                  Create manifest.json file that controls how your application
                  appears to users & its interface. it contains path of Logos of
                  various sizes, theme color, and other info
                </li>
                <li>
                  include manifest.json the in /index.html file: <br />
                  {`<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />`}{" "}
                </li>

                <li>
                  In index.js file ,change{" "}
                  <span className="text-primary">
                    serviceWokerRegistration.unregister()
                  </span>{" "}
                  to{" "}
                  <span className="text-primary">
                    serviceWokerRegistration.register()
                  </span>
                  .
                </li>
                <li>
                  Now run the app with{" "}
                  <span className="text-primary">
                    npm run build && npm run start-sw
                  </span>
                </li>
              </ol>
            </Card>
            <Card width={half} title="Service Workers vs Web Worker">
              <h5 className="text-primary">Web Worker</h5>
              Can have many web worker per tab, as we close tab web worker end.
              it is mainly used for running parallel heavy script to optimise
              app.
              <h5 className="text-primary">Service Workers</h5>
              <p>
                One service worker for all the tab , its lifespan is not
                dependent on tab close. main use case is to provide offline
                capabilities by acting as interface between network app and
                cache.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
export default Misc;
