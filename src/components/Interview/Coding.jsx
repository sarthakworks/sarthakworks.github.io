import Card from "../shared/Card";

function Coding() {
  const half = "col-lg-6";
  const full = "col-lg-12";
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <Card width={half} title="Infinite currying">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/infinitecurrying.png"
              />
            </Card>
            <Card width={half} title="Sum Memoization">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/sum.png"
              />
            </Card>
            <Card width={half} title="Generic Memoization">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/genericMemo.png"
              />
            </Card>
            <Card width={half} title="Fibonacci Memoization">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/fib.png"
              />
            </Card>
            <Card width={half} title="factorial Memoization">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/factorial.png"
              />
            </Card>
            <Card width={half} title="Palindrome">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/palindrome.png"
              />
            </Card>
            <Card width={half} title="Anagram">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/Anagram.png"
              />
            </Card>
            <Card width={half} title="Reverse a string">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/reverse.png"
              />
            </Card>
            <Card width={half} title="Sorting a Array">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/sortingArray.png"
              />
            </Card>
            <Card width={full} title="Search List Javascript">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/search.png"
              />
            </Card>
            <Card width={full} title="Pollyfils">
              <div className="row">
                <div className="col-6">
                  <h5 className="text-primary">Bind pollyfill</h5>
                  <img
                    className="img-fit"
                    alt="infinite curring"
                    width="100"
                    src="/assets/images/code/bindpoly.png"
                  />
                </div>
                <div className="col-6">
                  <h5 className="text-primary">Filter pollyfill</h5>
                  <img
                    className="img-fit"
                    alt="infinite curring"
                    width="100"
                    src="/assets/images/code/filterpoly.png"
                  />
                </div>
                <div className="col-6">
                  <h5 className="text-primary">Reverse pollyfill</h5>
                  <img
                    className="img-fit"
                    alt="infinite curring"
                    width="100"
                    src="/assets/images/code/reversepoly.png"
                  />
                </div>
                <div className="col-6">
                  <h5 className="text-primary">Flat pollyfill</h5>
                  <img
                    className="img-fit "
                    alt="infinite curring"
                    width="100"
                    src="/assets/images/code/flatpoly.png"
                  />
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-6">
                      <h5 className="text-primary">
                        Promise.all pollyfill logic
                      </h5>
                      <img
                        className="img-fit "
                        alt="infinite curring"
                        width="100"
                        src="/assets/images/code/promisallpoly1.png"
                      />
                    </div>
                    <div className="col-6">
                      <h5 className="text-primary">
                        Promise.all using invoking
                      </h5>
                      <img
                        className="img-fit "
                        alt="infinite curring"
                        width="100"
                        src="/assets/images/code/promisallpoly2.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <Card
              width={half}
              title="Print active names in ascending order of age from object"
            >
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/PrintNameSortAge.png"
              />
            </Card>
            <Card width={half} title="Remove Duplicate from array">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/removeduplicate.png"
              />
            </Card>
            <Card width={half} title="Range Creator">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/rangecreator.png"
              />
            </Card>
            <Card width={half} title="Shuffle Array Randomly">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/shuffle.png"
              />
            </Card>
            <Card width={half} title="Finding Number of vowels in string">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/findingvowels.png"
              />
            </Card>
            <Card width={half} title="Captalize a string">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/capital.png"
              />
            </Card>
            <Card width={half} title="Panagram">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/panagram.png"
              />
            </Card>
            <Card
              width={half}
              title="Maximum occuring Frequency in string/array and its count , 
              character map, count of each character"
            >
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/Maxfrequency.png"
              />
            </Card>
            <Card
              width={half}
              title="Two Sum, find elemnts whose sum is given target goal"
            >
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/twosum.png"
              />
            </Card>
            <Card width={half} title="Dynamic table creation with Dom api">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/table.png"
              />
            </Card>
            <Card width={full} title="Output Based javascript question">
              <ul>
                <li>
                  console.log(1 + "2" + "2");{" "}
                  <span className="text-primary fw-bold mb-1 "> // "122"</span>
                </li>
                <li>
                  console.log(1 + +"2" + "2");{" "}
                  <span className="text-primary fw-bold mb-1 ">//"32"</span>
                </li>
                <li>
                  console.log(1 + -"1" + "2");{" "}
                  <span className="text-primary fw-bold mb-1 ">// 02</span>
                </li>
                <li>
                  console.log(+"1" + "1" + "2");{" "}
                  <span className="text-primary fw-bold mb-1 ">//112</span>
                </li>
                <li>
                  console.log( "A" - "B" + "2");{" "}
                  <span className="text-primary fw-bold mb-1 ">//"NAN2"</span>
                </li>
                <li>
                  console.log( "A" - "B" + 2);{" "}
                  <span className="text-primary fw-bold mb-1 ">//NAN</span>
                </li>
                <li>
                  console.log(0 || 1);{" "}
                  <span className="text-primary fw-bold mb-1 ">// 1</span>
                </li>
                <li>
                  console.log(1 || 2);{" "}
                  <span className="text-primary fw-bold mb-1 ">// 1</span>
                </li>
                <li>
                  console.log(0 && 1);{" "}
                  <span className="text-primary fw-bold mb-1 "> // 0</span>
                </li>
                <li>
                  console.log(1 && 2);{" "}
                  <span className="text-primary fw-bold mb-1 ">// 2</span>
                </li>
                <li>
                  console.log(false == '0'){" "}
                  <span className="text-primary fw-bold mb-1 "> // true</span>
                </li>
                <li>
                  console.log(false === '0'){" "}
                  <span className="text-primary fw-bold mb-1 ">// false</span>{" "}
                </li>
                <li>
                  console.log(false != '0'){" "}
                  <span className="text-primary fw-bold mb-1 ">// false</span>
                </li>
                <li>
                  console.log(false !== '0'){" "}
                  <span className="text-primary fw-bold mb-1 ">// true</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coding;
