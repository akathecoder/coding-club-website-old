import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function FourOhFour() {
  return (
    <div class="flex h-screen bg-backgroundColor-main">
      <div class="m-auto align-middle">
        <h1 className="text-2xl mb-4 align-middle">
          <span className="text-4xl font-bold align-middle">
            404
          </span>
          <span className="text-6xl font-extralight align-middle ">
            |
          </span>
          This Page Could Not Be Found
        </h1>
        <div className="flex justify-center">
          <a
            className="px-5 py-4 mt-5 bg-blue-500 rounded-full shadow-xl  "
            href="/"
          >
            <FontAwesomeIcon
              icon={faHome}
              size="lg"
              color="white"
            />
            <span className="ml-4 text-white">
              Go to Home
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
