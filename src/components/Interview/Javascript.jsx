import { Outlet } from "react-router-dom";
import Card from "../shared/Card";

function Javascript() {
  const half = "col-lg-6";
  const full = "col-lg-12";
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <Card width={full} title="Data Types">
              <div className="row">
                <p>
                  A mutable object is an object whose state can be modified
                  after it is created.
                </p>
                <div className="col-6">
                  <h5 className="text-primary">Primitive( All Immutable)</h5>
                  <ul>
                    <li>
                      <span className="text-primary">null</span> (type of nul is
                      "object")
                    </li>
                    <li>
                      {" "}
                      <span className="text-primary">undefined</span>{" "}
                      ("undefined" type)
                    </li>
                    <li>
                      <span className="text-primary">String</span>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="text-primary">number</span>
                    </li>
                    <li>
                      <span className="text-primary">boolean</span>
                    </li>
                    <li>
                      <span className="text-primary">symbol</span>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  {" "}
                  <h5 className="text-primary">Reference(Mutable)</h5>
                  <ul>
                    <li>
                      <span className="text-primary">Arrays</span>- Arrays are
                      used for storing ordered collections.
                    </li>
                    <li>
                      <span className="text-primary">Objects</span>- Objects are
                      used for storing keyed collections.
                    </li>
                    <li>
                      <span className="text-primary">Function</span>
                    </li>
                    <li>
                      <span className="text-primary">set / Map</span>
                    </li>
                    <li>
                      <span className="text-primary">weakset/weakmap</span>
                    </li>
                    <li>
                      <span className="text-primary">date</span>
                    </li>
                  </ul>
                </div>

                <div className="row">
                  <div className="col-6">
                    <ul>
                      <li>
                        <span className="text-primary ">Symbol</span>
                        -Each instance of Symbol is unique , so it can be used
                        to create unique id with same name in multiple objects
                        to avoid
                      </li>{" "}
                      <li>
                        <span className="text-primary "> Set</span>
                        <p>
                          A Set is a collection of unique values of any type
                          (without keys).
                        </p>
                      </li>
                      <li>
                        <span className="text-primary "> Map</span>
                        <p>
                          {" "}
                          Map is a collection of keyed data items, just like an
                          Object. But the main difference is that Map allows
                          keys of any type.
                        </p>
                      </li>{" "}
                      <li>
                        <span className="text-primary "> Weakmap </span>
                        <p>
                          The first difference between Map and WeakMap is that
                          keys must be objects, not primitive values in weakmap.
                          if we use an object as the key in it, and there are no
                          other references to that object – it will be removed
                          from memory (and from the map) automatically.WeakMap
                          has only the following methods: weakMap.get(key)
                          weakMap.set(key, value) weakMap.delete(key)
                          weakMap.has(key)
                        </p>
                      </li>
                      <li>
                        <span className="text-primary "> weakSet </span>
                        <p>
                          {" "}
                          Weakset are similar to Set but we may only add objects
                          to WeakSet (not primitives). An object exists in the
                          set while it is reachable from somewhere else. other
                          wise garbage collected. Like Set, it supports add, has
                          and delete, but not size, keys() and no iterations.
                        </p>{" "}
                        <p>
                          <span className="text-primary "> Advantage </span>
                          We need to clean data when we remove its items,
                          otherwise it will grow in memory indefinitely. Such
                          cleaning can become a tedious task in complex
                          architectures.We can avoid it by switching to WeakMap.
                        </p>
                        <p>
                          <span className="text-primary ">
                            WeakMap and WeakSet{" "}
                          </span>
                          are used as “secondary” data structures in addition to
                          the “primary” object storage. Once the object is
                          removed from the primary storage, if it is only found
                          as the key of WeakMap or in a WeakSet, it will be
                          cleaned up automatically.
                        </p>
                      </li>{" "}
                    </ul>
                  </div>
                  <div className="col-6">
                    <img
                      className="col-6 img-fit"
                      alt="infinite curring"
                      width="100"
                      src="/assets/images/code/js/symbol.png"
                    />
                  </div>
                </div>
              </div>
            </Card>{" "}
            <Card width={full} title="closures">
              <ul>
                <li>
                  A function bundled with its lexical scope forms a closure. A
                  closure gives you access to an outer function's scope from an
                  inner function. In JavaScript, closures are created every time
                  a function is created, at function creation time.
                </li>

                <li>
                  <span className="text-primary fw-bold mb-1 ">Uses :</span>{" "}
                  Memoization , Currying, Data-privacy , maintaining state in
                  async world
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    Disadvantages :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
              </ul>
            </Card>
            <Card width={full} title="Types of functions">
              <ul>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    Higher Order Function :
                  </span>{" "}
                  A function that takes a function as an argument, or returns a
                  function
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    First-Class function :
                  </span>{" "}
                  When functions in a language are treated like any other
                  variable and can be passed as arguments.
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    Callback Function :
                  </span>{" "}
                  A function passed into another function as an argument, which
                  is then invoked inside the outer function to complete some
                  kind of routine or action.
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    Pure Function :
                  </span>{" "}
                  A function that always returns the same result if the same
                  arguments are passed.
                </li>
              </ul>
            </Card>{" "}
            <Card width={half} title="Event Bubbling vs Event capturing">
              <ul>
                <h5>
                  The standard DOM Events describes 3 phases of event
                  propagation:
                </h5>
                <ol>
                  <li>Capturing phase - the event goes down to the element.</li>
                  <li>Target phase - the event reached the target element.</li>
                  <li>
                    Bubbling phase - the event bubbles up from the element.
                  </li>
                </ol>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    Event Bubbling(default) :
                  </span>{" "}
                  When an event happens on an element, it first runs the
                  handlers on it, then on its parent, then all the way up on
                  other ancestors.
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    Event capturing :
                  </span>{" "}
                  In event capturing, an event propagates from the outermost
                  element to the target element.
                  <p className="text-danger">
                    elem.addEventListener(...,{"{"} capture: true{"}"})
                  </p>
                </li>
              </ul>
            </Card>{" "}
            <Card
              width={half}
              title="stop bubbling stopPropagation()  | cancel event preventDefault()"
            >
              <ul>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    event.stopPropagation() :
                  </span>{" "}
                  A bubbling event goes from the target element straight up to
                  html tag or even document object. But any handler may decide
                  that the event has been fully processed and stop the bubbling.
                  The method for it is event.stopPropagation().
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    event.preventDefault()
                  </span>{" "}
                  The preventDefault() method cancels the event if it is
                  cancelable, meaning that the default action that belongs to
                  the event will not occur.
                  <ol>
                    <li>
                      Clicking on a "Submit" button, prevent it from submitting
                      a form
                    </li>
                    <li>
                      {" "}
                      Clicking on a link, prevent the link from following the
                      URL
                    </li>
                  </ol>
                </li>
              </ul>
            </Card>{" "}
            <Card width={half} title="synthetic events in ReactJS">
              <p>
                HTML defines a set of events, and JavaScript uses event handlers
                to manage these events. React also implements event handlers,
                such as onClick, onMouseMove, onLoad, onError, etc. React’s
                event handlers are named with camelCase APIs, while JavaScript
                event handlers are named with lowercase APIs.
              </p>
              <p>
                In order to work as a cross-browser application, React has
                created a wrapper same as the native browser in order to avoid
                creating multiple implementations for multiple methods for
                multiple browsers, creating common names for all events across
                browsers. Another benefit is that it increases the performance
                of the application as React reuses the event object.
              </p>

              <p>
                ‘e’ is a synthetic event in e.stopPropagation(), a cross-browser
                object. It is made with a wrapper around the actual event of the
                browser.{" "}
              </p>
              <p className="text-danger">
                onClick(), onBlur() and onChange() are synthethic events with
                camelcase
              </p>
            </Card>{" "}
            <Card width={half} title="event delegation">
              <p>
                Capturing and bubbling allow us to implement one of the most
                powerful event handling patterns called event delegation.
              </p>
              <p>
                {" "}
                Event delegation allows us to avoid adding multiple event
                listeners to multiple child nodes; instead, the event listener
                is added to one parent. That event listener analyzes bubbled
                events to find a match on child elements.
              </p>
              <p>
                The <span className="text-danger"> e.target.nodeName </span>
                property of the .target allows us to identify a specific node.
                If our parent element contains more than one child element then
                we can identify specific elements by using the .nodeName
                property.
              </p>
            </Card>{" "}
            <Card width={half} title="Debouncing and throttling">
              <h5 className="text-primary">Debouncing</h5>
              <p>
                Debounce function limits the execution of a function call and
                waits for a certain amount of time before running it after the
                event.(Function execution occurs after 1sec after last click)
              </p>
              <h5 className="text-primary">Throttling</h5>
              <p>
                Throttling is used to call a function after every millisecond or
                a particular interval of time only the first click is executed
                immediately.(first click immediately execute function, next
                click will execute after given delay)
              </p>
            </Card>{" "}
            <Card width={half} title="Generator functions">
              <p>
                Generators can "yield" multiple values, one after another,
                on-demand nstead return one value and then stopping execution.
              </p>
              <p>
                The yield expression returns a value. However, unlike the return
                statement, it doesn't terminate the program. That's why you can
                continue executing code from the last yielded position
              </p>
              <p className="text-danger">
                function* generateSequence() {"{"}
                yield 1; yield 2; return 3;
                {"}"}
              </p>
              <p className="text-danger">const generator = generatorFunc();</p>{" "}
              <span>
                //A generator object named is created. and each yield can be
                executed by .next()
              </span>
              <p className="text-danger">
                console.log(generator.next().value;);
              </p>
            </Card>{" "}
            <Card width={half} title="Prototype inheritance">
              <p>
                Every objectin Javascript contains an internal property known as
                [[Prototype]]. The Prototypal Inheritance is a feature in
                javascript used to add methods and properties in objects. It is
                a method by which an object can inherit the properties and
                methods of another object. Traditionally, in order to get and
                set the [[Prototype]] of an object, we use Object.getPrototypeOf
                and Object.setPrototypeOf. Nowadays, in modern language, it is
                being set using __proto__.
              </p>
              <p className="text-danger">
                ChildObject.__proto__ = ParentObject
              </p>
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/js/proto.png"
              />
            </Card>{" "}
            <Card width={half} title="ES6 Features">
              <ul>
                <li className="text-primary">The let and const keyword</li>
                <li className="text-primary">Arrow Functions</li>
                <li className="text-primary">Spread and Rest Operator</li>
                <li className="text-primary">For/of loop for array</li>
                <li className="text-primary">Promises</li>
                <li className="text-primary">Default parameters</li>
                <li className="text-primary">Template Literals</li>
                <li className="text-primary">
                  Destructuring Assignment [a,b]=[b,a]
                </li>
                <li className="text-primary">
                  Modules (earlier commonjs with require keyword)
                </li>
              </ul>
            </Card>{" "}
            <Card width={half} title="Callbacks">
              <p>
                Functions executes in sequence they are called, To have better
                control over sequence of executon of various function
                interdependent on each other we can pass then as argumanet to
                each other. The benefit of using a callback function is that you
                can wait for the result of a previous function call and then
                execute another function call.
              </p>

              <p>
                Disadvantages is callback hell and inversion of control. better
                to use Promise
              </p>
            </Card>{" "}
            <Card width={half} title="Promise">
              <ul>
                <li>
                  The Promise object represents the eventual completion (or
                  failure) of an asynchronous operation and its resulting value.
                </li>
                <h5>A Promise can have 3 states:</h5>
                <ol>
                  <li>
                    {" "}
                    pending: initial state, neither fulfilled nor rejected.
                  </li>
                  <li> fulfilled: meaning that the operation was completed</li>
                  <li>
                    successfull/rejected: meaning that the operation failed.
                  </li>
                </ol>
              </ul>{" "}
              <h5>Creating a promise</h5>
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/js/promise1.png"
              />
              <h5>Fetching api using then()</h5>
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/js/promise2.png"
              />
            </Card>{" "}
            <Card width={half} title="Async / Await">
              <p>
                {" "}
                The purpose of async/await is to simplify the syntax necessary
                to consume promise-based APIs
              </p>
              <p>
                {" "}
                Using Async/Await syntax, a promise-based asynchronous code can
                be written in a synchronous format which saves a lot of time and
                code becomes scalable.
              </p>
              <h5>Fetching api using Async/Await</h5>
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/js/asyncawait.png"
              />
            </Card>{" "}
            <Card width={half} title="Arrow Functions">
              <p>more convienient and short way to write function in es6</p>
              <p>
                if you have only one parameter, you can skip the parentheses ()
              </p>
              <p>
                if only one value is return in 1 statement skip {} braces and
                return keyword
              </p>
              <p className="text-danger">const any = i => i+1; </p>
              <p>
                with arrow functions there are no binding of this keyword to
                owner object.With arrow functions the this keyword always
                represents the object that defined/invoked the arrow function.
                Mostly it is Global object
              </p>
            </Card>{" "}
            <Card width={half} title="This Keyword">
              <ul>
                <li>In JavaScript, the this keyword refers to an object.</li>
                <li>In an object method, this refers to the object.</li>
                <li>When used alone, this refers to the global object.</li>
                <li>In a function, this refers to the global object</li>
                <li>In a function, in strict mode, this is undefined.</li>
                <li>
                  In an event, this refers to the element that received the
                  event.
                </li>
                <li>
                  Methods like call(), apply(), and bind() can refer this to any
                  object.
                </li>
                <li>
                  in arrow function this refers to object scope from where it
                  isinvoked mostly global scope {}
                </li>
              </ul>
            </Card>{" "}
            <Card width={half} title="Currying">
              <ul>
                <li>
                  Currying is a transformation of functions that translates a
                  function from callable as{" "}
                  <span className="text-primary fw-bold mb-1 ">
                    {" "}
                    f(a, b, c)
                  </span>
                  into callable as
                  <span className="text-primary fw-bold mb-1 ">
                    {" "}
                    f(a)(b)(c)
                  </span>
                  .
                </li>
                <li>
                  Currying can be used to make argument independent more
                  universal function execution. Like infinite sum function
                </li>
              </ul>
            </Card>
            <Card width={full} title="Popular methods ">
              <ul>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    parseInt(string, radix)
                  </span>
                  jkbckdwb
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    {" "}
                    JSON.parse()
                  </span>
                  When receiving data from a web server, the data is always a
                  string. JSON.parse() is synchronous can parse a string to (a)
                  JavaScript object(s)
                </li>

                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    {" "}
                    .json() :{" "}
                  </span>
                  json() is asynchronous and returns a Promise object that
                  resolves to a JavaScript object
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    JSON.stringify(arr) :
                  </span>
                  When sending data to a web server, the data has to be a
                  string.it Convert a JavaScript object into a string.JSON makes
                  it possible to store JavaScript objects as text.
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    {" "}
                    .toString() :{" "}
                  </span>
                  to return any type as string output , does not change the
                  original variable
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    .split(separator, limit) :
                  </span>{" "}
                  splits a string into an array of substrings.
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    .join('') :{" "}
                  </span>
                  returns an array as a string. Any separator can be specified.
                  The default is comma (,).
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    .slice(0, 2) :
                  </span>
                  jkbckdwb
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    {" "}
                    str.substring(1, 4) :
                  </span>
                  jkbckdwb
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">.length : </span>
                  jkbckdwb
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 "> .map : </span>
                  jkbckdwb
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    .reduce() :{" "}
                  </span>
                  jkbckdwb
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    {" "}
                    .filter() :{" "}
                  </span>
                  jkbckdwb
                </li>
              </ul>
            </Card>
            <Card
              width={full}
              title="Popular methods that change original Array "
            >
              <ul>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    {" "}
                    .reverse()
                  </span>
                  .
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 "> .splice()</span>
                  .
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Javascript;
