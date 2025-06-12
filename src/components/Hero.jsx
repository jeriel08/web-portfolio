import React from "react";
import Navbar from "./Navbar";
import hero from "/hero.jpeg";
import jeriel from "/jeriel_sanao.pdf";
import linkedin from "/linkedin.svg";
import github from "/github.svg";
import instagram from "/instagram.svg";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center">
      <div className="md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 z-0 right-2 top-28 rounded-3xl"></div>
      <Navbar />
      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 
      md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10"
      >
        <section
          className="flex-1 mr-28 md:text-left mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>
          <header>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Jeriel Sanao
            </h1>
            <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-[#3e0f4a] md:text-[#c744ec] mb-2">
              BSIT Student
            </h2>
          </header>
          <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-6">
            I'm Jeriel Sanao, a passionate developer and problem-solver. Explore
            my projects, learn more about me, and feel free to connect. Let's
            create something amazing together!
          </p>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://www.linkedin.com/in/jeriel-lian-sanao-b2879b344"
              target="_blank"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="h-11 w-11 hover:shadow-[0_0_20px_rgba(128,0,128,0.7)] transition-shadow duration-300 rounded-md p-0"
              />
            </a>
            <a href="https://github.com/jeriel08" target="_blank">
              <img
                src={github}
                alt="GitHub"
                className="h-11 w-11 hover:shadow-[0_0_20px_rgba(128,0,128,0.7)] transition-shadow duration-300"
              />
            </a>
            <a href="https://www.instagram.com/jiaaaaaannn_/" target="_blank">
              <img
                src={instagram}
                alt="Instagram"
                className="h-11 w-11 hover:shadow-[0_0_20px_rgba(128,0,128,0.7)] transition-shadow duration-300"
              />
            </a>
          </div>

          <a href={jeriel} download>
            <button
              className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] 
              transition-all duration-300 rounded-full text-lg cursor-pointer"
            >
              Download CV
            </button>
          </a>
        </section>
        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex-1 flex justify-center md:justify-end mt-0"
        >
          <div className="relative rounded-full p-[8px] bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] animate-border-rotate">
            <div className="rounded-full bg-[#1a0521] p-[4px]">
              <img
                src={hero}
                alt="Hero Image"
                className="h-[300px] sm:h-[400px] md:h-[485px] w-[250px] sm:w-[480px] object-cover rounded-full"
              />
            </div>
          </div>
        </figure>
      </main>
    </div>
  );
}
