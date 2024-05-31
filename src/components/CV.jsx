import "./../App.css";
import { useTranslation } from "react-i18next";
import cv from "./../images/CV.png";

const CV = () => {
  const { t } = useTranslation();
  

  return (
    <div className="mx-auto pt-9 pb-4 mb-2 p-5">
      <h1 className="text-3xl">CV</h1>
      <div className="p-10 lg:p-5 justify-center mt-10">
        <img src={cv} alt="CV" className="w-3/5 mx-auto mb-8" />
        <a
          href={cv}
          download="CV.png"
          className="mt-4 inline-block bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg text-center hover:bg-teal-700 transition"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default CV;
