import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function FourOhFour() {
  return (
    <div className="flex h-screen bg-backgroundColor-main">
      <div className="m-auto align-middle">
        {/* <h1 className="text-2xl mb-4 align-middle">
          <span className="text-4xl font-bold align-middle">
            404
          </span>
          <span className="text-6xl font-extralight align-middle ">
            |
          </span>
          This Page Could Not Be Found
        </h1> */}

        <div className="p-10">
          <Image
            src="/assets/images/svg/undraw_page_not_found_su7k.svg"
            height="500"
            width="813"
          />
        </div>

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
