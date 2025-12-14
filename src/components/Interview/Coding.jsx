import Card from "../shared/Card";
import codeInfinitecurryingPng from '../assets/images/code/infinitecurrying.png';
import codeSumPng from '../assets/images/code/sum.png';
import codeGenericmemoPng from '../assets/images/code/genericMemo.png';
import codeFibPng from '../assets/images/code/fib.png';
import codeFactorialPng from '../assets/images/code/factorial.png';
import codePalindromePng from '../assets/images/code/palindrome.png';
import codeAnagramPng from '../assets/images/code/Anagram.png';
import codeReversePng from '../assets/images/code/reverse.png';
import codeSortingarrayPng from '../assets/images/code/sortingArray.png';
import codeSearchPng from '../assets/images/code/search.png';
import codeBindpolyPng from '../assets/images/code/bindpoly.png';
import codeFilterpolyPng from '../assets/images/code/filterpoly.png';
import codeReversepolyPng from '../assets/images/code/reversepoly.png';
import codeFlatpolyPng from '../assets/images/code/flatpoly.png';
import codePromisallpoly1Png from '../assets/images/code/promisallpoly1.png';
import codePromisallpoly2Png from '../assets/images/code/promisallpoly2.png';
import codePrintnamesortagePng from '../assets/images/code/PrintNameSortAge.png';
import codeRemoveduplicatePng from '../assets/images/code/removeduplicate.png';
import codeRangecreatorPng from '../assets/images/code/rangecreator.png';
import codeShufflePng from '../assets/images/code/shuffle.png';
import codeFindingvowelsPng from '../assets/images/code/findingvowels.png';
import codeCapitalPng from '../assets/images/code/capital.png';
import codePanagramPng from '../assets/images/code/panagram.png';
import codeMaxfrequencyPng from '../assets/images/code/Maxfrequency.png';
import codeTwosumPng from '../assets/images/code/twosum.png';
import codeTablePng from '../assets/images/code/table.png';

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
                src={codeInfinitecurryingPng}
              />
            </Card>
            <Card width={half} title="Sum Memoization">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src={codeSumPng}
              />
            </Card>
            <Card width={half} title="Generic Memoization">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src={codeGenericmemoPng}
              />
            </Card>
            <Card width={half} title="Fibonacci Memoization">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src={codeFibPng}
              />
            </Card>
            <Card width={half} title="factorial Memoization">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src={codeFactorialPng}
              />
            </Card>
            <Card width={half} title="Palindrome">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src={codePalindromePng}
              />
            </Card>
            <Card width={half} title="Anagram">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src={codeAnagramPng}
              />
            </Card>
            <Card width={half} title="Reverse a string">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src={codeReversePng}
              />
            </Card>
            <Card width={half} title="Sorting a Array">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src={codeSortingarrayPng}
              />
            </Card>
            <Card width={full} title="Search List Javascript">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src={codeSearchPng}
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
                    src={codeBindpolyPng}
                  />
                </div>
                <div className="col-6">
                  <h5 className="text-primary">Filter pollyfill</h5>
                  <img
                    className="img-fit"
                    alt="infinite curring"
                    width="100"
                    src={codeFilterpolyPng}
                  />
                </div>
                <div className="col-6">
                  <h5 className="text-primary">Reverse pollyfill</h5>
                  <img
                    className="img-fit"
                    alt="infinite curring"
                    width="100"
                    src={codeReversepolyPng}
                  />
                </div>
                <div className="col-6">
                  <h5 className="text-primary">Flat pollyfill</h5>
                  <img
                    className="img-fit "
                    alt="infinite curring"
                    width="100"
                    src={codeFlatpolyPng}
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
                        src={codePromisallpoly1Png}
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
                        src={codePromisallpoly2Png}
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
                src={codePrintnamesortagePng}
              />
            </Card>
            <Card width={half} title="Remove Duplicate from array">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src={codeRemoveduplicatePng}
              />
            </Card>
            <Card width={half} title="Range Creator">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src={codeRangecreatorPng}
              />
            </Card>
            <Card width={half} title="Shuffle Array Randomly">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src={codeShufflePng}
              />
            </Card>
            <Card width={half} title="Finding Number of vowels in string">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src={codeFindingvowelsPng}
              />
            </Card>
            <Card width={half} title="Captalize a string">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src={codeCapitalPng}
              />
            </Card>
            <Card width={half} title="Panagram">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src={codePanagramPng}
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
                src={codeMaxfrequencyPng}
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
                src={codeTwosumPng}
              />
            </Card>
            <Card width={half} title="Dynamic table creation with Dom api">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src={codeTablePng}
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