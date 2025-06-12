import React from "react";
import byteVault from "/byte_vault.png";
import about_picture from "/about_picture.jpg";
import hero from "/hero.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-4 relative"
        >
          <div
            className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] 
          bg-gradient-to-l from-[#6d2897] via-[#6c95f5] to-[#bb61c5] absolute transform rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full"
          ></div>
          <img
            src={byteVault}
            alt="ByteVault"
            className="absolute -top-2 left-5 sm:left-10 transform translate-y-12 z-20 w-24 h-24 sm:w-32 sm:h-32
          rounded-3xl shadow-lg"
          />
          <img
            src={about_picture}
            alt="About Picture"
            className="relative z-10 w-36 h-44 sm:h-40 md:w-72 md:h-96 rounded-lg shadow-lg"
          />
          <img
            src={hero}
            alt="Hero Picture"
            className="absolute bottom-0 right-5 sm:right-10 transform translate-y-12 z-10 w-20 h-20 sm:w-32
          sm:h-32 rounded-3xl shadow-lg"
          />
        </figure>

        <article
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-center lg:text-left relative"
        >
          <div
            className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50
            -top-5 left-10"
          ></div>
          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About Me
            </h1>
          </header>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            Hi, I'm Jeriel Sanao, a 2nd-year Information Technology student with
            a passion for learning and building innovative solutions. As I
            navigate my journey in IT, I've been exploring web development,
            programming, and problem-solving through various projects, including
            this portfolio website.
          </p>
        </article>
      </div>
    </section>
  );
}
