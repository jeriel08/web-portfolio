import React from "react";
import java from "/java.svg";
import python from "/python.svg";
import html from "/html.svg";
import css from "/css.svg";
import javascript from "/javascript.svg";
import bootstrap from "/bootstrap.svg";
import tailwind from "/tailwind.svg";
import laravel from "/laravel.svg";
import react from "/react.svg";
import mysql from "/mysql.svg";

const skillsData = [
  { id: 1, image: java, title: "Java" },
  { id: 2, image: python, title: "Python" },
  { id: 3, image: html, title: "HTML" },
  { id: 4, image: css, title: "CSS" },
  { id: 5, image: javascript, title: "JavaScript" },
  { id: 6, image: bootstrap, title: "Bootstrap" },
  { id: 7, image: tailwind, title: "Tailwind" },
  { id: 8, image: laravel, title: "Laravel" },
  { id: 9, image: react, title: "React" },
  { id: 10, image: mysql, title: "MySQL" },
];

const SkillBox = ({ image, title }) => (
  <article className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300">
    <figure className="flex justify-center mb-4">
      <img src={image} alt={title} className="w-16 h-16 sm:w-20 sm:h-20" />
    </figure>
    <header>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
    </header>
  </article>
);

export default function Skill() {
  return (
    <section
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10"
      id="skills"
    >
      <div
        className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl 
      opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"
      ></div>

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-2 text-center space-y-6 sm:space-y-10"
      >
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold ">
            My Expertise <br /> and{" "}
            <span className="text-purple-400">Skills</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            Explore my technical expertise in creating modern, user-focused web
            solutions and system.
          </p>
        </header>

        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mt-4"
        >
          {skillsData.map((skill) => (
            <SkillBox key={skill.id} image={skill.image} title={skill.title} />
          ))}
        </section>
      </div>
    </section>
  );
}
