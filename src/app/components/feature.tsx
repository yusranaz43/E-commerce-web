import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBuilding, faChartLine } from "@fortawesome/free-solid-svg-icons";

export default function FeatureProduct() {
  return (
    <section className="my-16 mx-44">
      <div>
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-gray-500 pb-2.5">Featured Products</h2>
          <h3 className="font-bold pb-2.5 text-gray-900 text-2xl">THE BEST SERVICES</h3>
          <p className="text-sm text-gray-500">Problems trying to resolve the conflict between</p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-3 space-x-4 pt-3 items-center w-full h-[300px]">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <FontAwesomeIcon icon={faBook} className="text-sky-500 text-5xl" />
            </div>
            <h4 className="font-bold text-lg text-gray-900">Easy Wins</h4>
            <p className="text-sm text-gray-500">Get your best looking smile <br/>now!</p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <FontAwesomeIcon icon={faBuilding} className="text-sky-500 text-5xl" />
            </div>
            <h4 className="font-bold text-lg text-gray-900">Concrete</h4>
            <p className="text-sm text-gray-500">
              Defalcate is most focused in<br/> helping you discover your most<br/> beautiful smile.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <FontAwesomeIcon icon={faChartLine} className="text-sky-500 text-5xl" />
            </div>
            <h4 className="font-bold text-lg text-gray-900">Hack Growth</h4>
            <p className="text-sm text-gray-500">
              Overcome any hurdle or any <br/> other problem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
