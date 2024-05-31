import "./../App.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import profile_picture from "./../images/ProfilePicture.png";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto pt-9 pb-4 mb-2 p-5">
      <h1 className="text-3xl">Wout Van Cleemput</h1>
      <div className="flex flex-col lg:flex-row gap-10 p-10 lg:p-5 justify-center mt-10">
        <div className="flex flex-col w-full lg:w-1/3 bg-gray-100 p-4 rounded-xl">
          <img
            src={profile_picture}
            alt="Profile"
            className="rounded-full w-48 h-48 mx-auto mb-8"
          />
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-teal-600 border-b border-teal-600 mb-2">
              Profile
            </h2>
            <p>
              Computer Science Student with a strong sense of independence and
              trustworthiness, while remaining dedicated to personal growth.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-teal-600 border-b border-teal-600 mb-2">
              Language
            </h2>
            <ul className="list-disc pl-5">
              <li>Native Dutch</li>
              <li>Fluent English</li>
              <li>Intermediate French</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-teal-600 border-b border-teal-600 mb-2">
              Computer Skills
            </h2>
            <ul className="list-disc pl-5">
              <li>Python</li>
              <li>Java/JavaFX</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>C#</li>
            </ul>
          </section>
        </div>

        <div className="flex-1 p-6">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-600 border-b border-teal-600 mb-4">
              Education
            </h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-teal-600">
                Leiepoort Sint Vincentius Deinze
              </h3>
              <p className="text-sm">Computer Management</p>
              <p className="text-sm">2015-2021</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-teal-600">
                Hogent University of Applied Sciences and Arts
              </h3>
              <p className="text-sm">Bachelor Applied Informatics</p>
              <p className="text-sm">2021-Present</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-600 border-b border-teal-600 mb-4">
              Work Experience
            </h2>
            <div>
              <h3 className="text-lg font-semibold text-teal-600">
                Internship Optis
              </h3>
              <p className="text-sm">
                I am currently doing an internship with another student, during
                this internship we are making a training budget manager app for
                every employee at Cronos.
              </p>
              <p className="text-sm">February 2024 - Present</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-600 border-b border-teal-600 mb-4">
              Experiences
            </h2>
            <div>
              <h3 className="text-lg font-semibold text-teal-600">
                Working in Group Projects
              </h3>
              <p className="text-sm">
                I've accumulated a significant amount of experience through
                group projects, where we function as a team and distribute
                responsibilities among ourselves. Whenever someone encounters a
                problem, we work together to solve it.
              </p>
              <p className="text-sm">2015-Present</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
