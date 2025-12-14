import Card from "../shared/Card";
import codeReactErrorPng from "../assets/images/code/react/error.png";
import codeReactError2Png from "../assets/images/code/react/error2.png";
import codeReactReduxstorePng from "../assets/images/code/react/reduxStore.png";
import codeReactReduxappPng from "../assets/images/code/react/reduxApp.png";
import codeReactReduxcomponentPng from "../assets/images/code/react/reduxComponent.png";
import codeReactTypeDefaultPng from "../assets/images/code/react/type_default.png";
import codeReactLazyPng from "../assets/images/code/react/lazy.png";

function React() {
  const half = "col-lg-6";
  const full = "col-lg-12";
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <Card width={full} title="Lifecycle of Components">
              <ul>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    componentWillMount() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    render() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    componentDidMount() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>

                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    componentWillUnmount() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    componentDidCatch() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    componentDidUpdate (prevProps, prevState, snapshot)() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
              </ul>
            </Card>
            <Card width={full} title="React Hooks">
              <ul>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    usestate() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    useeffect() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    useRef() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    Usecontext() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    usereducer() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    useMemo() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    useCallback() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
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
            <Card width={full} title="Virtualization scroll react window">
              <h5 className="text-danger">in progress</h5>
            </Card>
            <Card width={full} title="Reconciliation">
              <p>
                React keeps in-memory virtual dom in sync with actual dom using
                Batch update this process is called reconcilliation
              </p>
              <p className="text-primary">
                Dom -&gt;virtual dom & current virtual dom-&gt; diffing
                algo-&gt; various changes accumulated-&gt; Batch update-&gt;
                change to origincal Dom
              </p>
              <p>
                React donot update Dom tree directly, It creates an in-memory
                replica of dom known as virtual tree. Whenever there is a update
                to a node, React creates a second virtual dom with updated node
                and subtree. Then it do a diff between previous and current
                virtual dom to identify what are exact changes. After
                identifying exact change it then update only that change in
                original dom using batch update. This changes from virtual dom
                to Dom are done through Batch update. React accumulates various
                changes to various nodes through diffing between two virtual
                doms. And these changes are applied to DOM using batch update
              </p>
              <p>
                <span className="text-primary">Advantage : </span>fast reactive
                website as we donot have to re-render dom again and again for
                all changes. Also we are updating dom at a particular frequency
                due to batch update.
              </p>
            </Card>
            <Card width={half} title="Pure Components">
              <h5 className="text-danger">in progress</h5>
            </Card>
            <Card width={half} title="Controlled vs uncontrolled components">
              In a controlled component, form data is handled by a React
              component. The alternative is uncontrolled components, where form
              data is handled by the DOM itself.
            </Card>
            <Card width={full} title="Handle error boundaries">
              <div className="row">
                <div className="col-6">
                  {" "}
                  <h5 className="text-danger">
                    Using try/catch block in each component
                  </h5>
                  <img
                    className="img-fit"
                    alt="infinite curring"
                    width="100"
                    src={codeReactErrorPng}
                  />
                </div>
                <div className="col-6">
                  {" "}
                  <h5 className="text-danger">
                    Using React Error Boundary which is only available in class
                    Component
                  </h5>
                  <img
                    className="img-fit"
                    alt="infinite curring"
                    width="100"
                    src={codeReactError2Png}
                  />
                </div>
              </div>{" "}
            </Card>

            <Card width={full} title="Redux">
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li>
                      <h5 className="text-primary">
                        Create A store and reducer
                      </h5>
                      <img
                        className="img-fit"
                        alt="infinite curring"
                        width="100"
                        src={codeReactReduxstorePng}
                      />
                    </li>
                    <li>
                      <h5 className="text-primary">
                        Wrap app inside Provider by importing from react-redux
                      </h5>
                      <img
                        className="img-fit"
                        alt="infinite curring"
                        width="100"
                        src={codeReactReduxappPng}
                      />
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      <h5 className="text-primary">
                        in component use useSelector hook to acces the state
                      </h5>{" "}
                      <h5 className="text-primary">
                        useDispatch is used to dispatch Action with payload
                      </h5>
                      <img
                        className="img-fit"
                        alt="infinite curring"
                        width="100"
                        src={codeReactReduxcomponentPng}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
            <Card width={half} title="Context Api">
              <ol>
                <li>
                  Create a context using createContext() and pass the initial
                  state as arguments. Context can also be defined without
                  passing any arguments.
                </li>
                <li>
                  Define a function that will deliver the data through the
                  Provider.
                </li>
                <li>
                  Using useReducer() hook accepts a Reducer with the default
                  state, then returns the updated state and dispatches a
                  function.
                </li>
                <li>
                  Inside the provider function, use useReducer() and pass the
                  Reducer and the initial state as arguments. The state returned
                  and dispatch are then passed as values in the Provider.
                </li>
              </ol>
            </Card>
            <Card width={full} title="Redux vs Context Api">
              <p>
                To solve the prop drilling issue, we have State Management
                Solutions like Context API and Redux
              </p>
              <h5>
                Context API: Resourceful and ideal for small applications where
                state changes are minimal
              </h5>
              <h5>
                Redux: Perfect for larger applications where there are
                high-frequency state updates
              </h5>
              <div className="row">
                <div className="col-6">
                  <h5 className="text-primary">Redux</h5>
                  <ul>
                    <li>Redux comprise mainly of are Action Reducer Store</li>
                    <li>
                      Redux requires adding more libraries to the application
                      bundle that increase bundle size.
                    </li>
                    <li>Work perfectly with both static and dynamic data</li>
                    <li>
                      Easily extendible due to the ease of adding new
                      data/actions after the initial setup
                    </li>
                    <li>
                      Redux only re-renders the updated components. This can be
                      monitored on the console as there's a log in each
                      component.
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <h5 className="text-primary">Context Api</h5>
                  <ul>
                    <li>
                      Context API is easy to is use as it has a short learning
                      curve. It requires less code, and because there's no need
                      of extra libraries, bundle sizes are reduced.{" "}
                    </li>
                    <li>
                      Specifically designed for static data, that is not often
                      refreshed or updated
                    </li>
                    <li>Adding new contexts requires creation from scratch</li>
                    <li>
                      Context API prompts a re-render on each update of the
                      state and re-renders all components regardless
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
            <Card width={full} title="Redux | Middleware | Thunk ">
              <ul>
                <li>
                  <h5 className="text-primary">STORE</h5>A Store Is A Place
                  Where The Entire State Of Your Application Lists. It Is Like A
                  Brain Responsible For All Moving Parts In Redux.
                </li>
                <li>
                  <h5 className="text-primary">ACTION</h5>
                  Actions are JavaScript object that contains information.
                  Actions are the only source of information for the store. It
                  basically carries a payload of information from the
                  application to the store. It only tells us what has happened.
                  Actions have a type property that they must include as type
                  property tells what kind of action to perform. Action can also
                  contain the payload(data field in the action) to describe the
                  action.
                </li>
                <li>
                  <h5 className="text-primary">REDUCER</h5>
                  It Determines How The State Will Change. Reducers Read The
                  Payloads From The Actions And Then Updates The Store Via The
                  State Accordingly. It Is A Pure Function Which Returns A New
                  State From The Initial State. It Returns The Previous State As
                  It Is If No Work Needs To Be Done.
                  <p className="text-danger">
                    export default combineReducers({"{"}todos, counter{"}"})
                  </p>
                </li>
                <li>
                  <h5 className="text-primary">Middleware</h5>
                  With a plain basic Redux store, you can only do simple
                  synchronous updates by dispatching an action. Middleware
                  extends the store's abilities, and lets you write async logic
                  that interacts with the store. Middleware only wraps the
                  store's dispatch function. Technically, anything a middleware
                  can do, you can do manually by wrapping every dispatch call,
                  but it's easier to manage this in a single place and define
                  action transformations on the scale of the whole project.
                </li>
                <li>
                  <h5 className="text-primary">Thunk</h5>
                  is used to delay the evaluation/calculation of an operation
                  allows you to write action creators that return a function
                  instead of an action. The thunk can be used to delay the
                  dispatch of an action, or to dispatch only if a certain
                  condition is met. The inner function receives the store
                  methods dispatch() and getState() as parameters.
                </li>
                <li>
                  <h5 className="text-primary">Redux-devtools</h5>
                  Redux DevTools is a live-editing time travel environment for
                  Redux with hot reloading, action replay, and customizable UI.
                  If you don't want to bother with installing Redux DevTools and
                  integrating it into your project, consider using Redux
                  DevTools Extension for Chrome and Firefox.
                </li>{" "}
                <li>
                  <h5 className="text-primary">applyMiddleware().</h5>
                  It is a store enhancer to add multiple middlewares to Redux.
                  you can add redux-thunk and logger passing them as arguments
                  to applyMiddleware()
                  <p className="text-danger">
                    let middlewares = [thunk , a , b] <br /> const store =
                    createStore(Reducer, applyMiddleware(...middlewares ));
                  </p>
                </li>
                <li>
                  <h5 className="text-primary">compose().</h5>
                  To apply multiple store enhancers, you may use compose(). If
                  you use other store enhancers in addition to applyMiddleware,
                  make sure to put applyMiddleware before them in the
                  composition chain because the middleware is potentially
                  asynchronous.
                  <p className="text-danger">
                    const store = createStore( reducer,
                    compose(applyMiddleware(thunk), window.devToolsExtension &&
                    window.devToolsExtension(),) )
                  </p>
                </li>
              </ul>
            </Card>
            <Card width={half} title="Higher order Components">
              <p>
                A higher-order component (HOC) is an advanced technique in React
                for reusing component logic.in other words, a higher-order
                component is a function that takes a component and returns a new
                component.
              </p>
            </Card>
            <Card width={half} title="Class vs Functional Components">
              <h5 className="text-danger">in progress</h5>
            </Card>
            <Card width={half} title="PropTypes typechecking | Default props">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src={codeReactTypeDefaultPng}
              />
            </Card>
            <Card width={full} title="Lazy Loading">
              <div className="row">
                <ul className="col-6">
                  <p>
                    It is a concept or a way to dynamically load a part of code
                    only when it is required. It is also referred to as code
                    splitting and data fetching.
                  </p>
                  <h5 className="text-primary">Implementation:</h5>{" "}
                  <li>
                    <span className="text-primary"> react.lazy()</span>-
                    function in react that lets you load react components lazily
                    through code splitting without help from any additional
                    libraries.
                  </li>
                  <li>
                    <span className="text-primary">Suspense</span>- Suspense -
                    is used to wrap lazy components. Multiple lazy components
                    can be wrapped with the suspense component.
                  </li>
                  <li>
                    <span className="text-primary"> fallback</span>- - suspense
                    take a fallback property to render whle our lazy component
                    is loading on slow network.
                  </li>
                </ul>
                <ul className="col-6">
                  <img
                    className="img-fit"
                    alt="infinite curring"
                    width="100"
                    src={codeReactLazyPng}
                  />
                </ul>
              </div>
            </Card>
            <Card
              width={full}
              title="Testing Jest /enzymes /react testing library"
            >
              <h5 className="text-primary">fireEvent-</h5>
              <p>
                The fireEvent method allows you to fire events to simulate user
                actions. fireEvent dispatches exactly the events you tell it to
                and just those - even if those exact events never had been
                dispatched in a real interaction in a browser. <br />
                <span className="text-danger">
                  fireEvent.click(screen.getByText('any text'))
                </span>
              </p>
              <h5 className="text-primary">userEvent-</h5>
              <p>
                userEvent uses the fireEvent. You can consider fireEvent being
                the low-level api, while userEvent sets a flow of actions.
              </p>

              <p className="text-danger">
                <span>import sum from './sum'</span> <br />
                <span className="mx-2">
                  test('adds 1 + 2 to equal 3', () =&gt; {"{"}
                </span>{" "}
                <br />
                <span className="mx-4">expect(sum(1, 2)).toBe(3))</span> <br />
                <span className="mx-3">{"}"}</span>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default React;
