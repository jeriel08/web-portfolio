import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const service_id = "service_vh9ubxd";
  const template_id = "template_4cn3wu4";
  const public_key = "WVOLHJPht935dyNgL";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: public_key,
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
          console.log("✅ Message sent successfully!");
          form.current.reset(); // clear form
        },
        (error) => {
          toast.error("❌ Failed to send message. Please try again.");
          console.log("❌ Failed to send message. Please try again.");
          console.error("Email sending error:", error);
        }
      );
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <section
        data-aos="fade-up"
        data-aos-delay="300"
        className="min-h-screen overflow-hidden flex justify-center items-center mt-2 relative"
        id="contact"
      >
        <section className="p-8 w-full md:w-1/2">
          <header className="mb-6">
            <h2 className="text-4xl font-bold text-center text-white">
              Contact Me!
            </h2>
          </header>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
                required
              />
            </div>
            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
                required
              ></textarea>
            </div>
            {/* Button */}
            <button
              className="w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] 
            hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] transition-all duration-300 rounded-full text-lg cursor-pointer"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </section>
      </section>
    </>
  );
}
