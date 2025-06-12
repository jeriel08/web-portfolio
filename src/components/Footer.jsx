import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-700 to-blue-700 text-white py-5">
      <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-extrabold mb-4 md:mb-0">JerielDev</h1>
        <p className="text-sm text-center md:text-left">
          {new Date().getFullYear()} Jeriel Sanao. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
