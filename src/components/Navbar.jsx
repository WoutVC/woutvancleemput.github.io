import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getLinkClassName = (path) => {
    return location.pathname === path ? "nav-link selected" : "nav-link";
  };

  return (
    <div className="navbar flex flex-col">
      <div className="container mx-auto nav-buttons justify-between flex relative">
          <p className="text-white">WoutVC</p>
        <button
          data-collapse-toggle="navbar-default"
          onClick={() => setIsNavOpen(!isNavOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="flex hidden md:flex gap-10">
          <div className="nav-links-container gap-2">
            <Link to="/" className={getLinkClassName("/")}>
              {t("portfolio")}
            </Link>
            <Link to="/cv" className={getLinkClassName("/cv")}>
              CV
            </Link>
            <button
              onClick={() =>
                i18n.changeLanguage(i18n.language === "nl" ? "en" : "nl")
              }
              className="color-[#FFFFFF] nav-link"
            >
              {i18n.language === "nl" ? "EN" : "NL"}
            </button>
          </div>
        </div>
      </div>

      {/* Hamburger menu */}
      <div
        className={"md:hidden " + (isNavOpen ? "w-full" : "hidden")}
        id="navbar-hamburger"
      >
        <ul className="flex flex-col font-medium mt-4 rounded-lg">
          <Link to="/" className="color-[#FFFFFF] nav-link">
            {t("portfolio")}
          </Link>
          <Link to="/cv" className={getLinkClassName("/cv")}>
              CV
            </Link>
          <button
            onClick={() =>
              i18n.changeLanguage(i18n.language === "nl" ? "en" : "nl")
            }
            className="color-[#FFFFFF] nav-link"
          >
            {i18n.language === "nl" ? "EN" : "NL"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
