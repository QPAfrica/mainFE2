import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { fadeIn, staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailjs.sendForm(
      "service_hey8g2b",
      "template_78tranj",
      event.target,
      "WyqDbB03MxR12L1oe"
    );

    alert("Message sent successfully...");
    setEmail("");
    setName("");
    setMessage("");

    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Contact - QPAfrica</title>
        <meta name="description" content="Meta Description here" />
      </Helmet>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.1 }}
        className="relative w-full App bg-black max-w-full"
      >
        <div className="relative h-screen text-white">
          {/* <div className="circle mix-blend-multiply"></div>
          <div className="littlecircle mix-blend-multiply"></div> */}
          <NavBar />
          <div className="px-4 sm:pt-20 bg-black w-full absolute top-[50%] translate-y-[-50%]">
            <motion.div
              variants={fadeIn("down", "spring", 0.2, 0.75)}
              className="max-w-screen-md mx-auto"
            >
              <h1 className="text-3xl text-center font-bold py-8 sm:py-0 text-white">
                Let’s talk. Get in touch with us
              </h1>
              <form
                onSubmit={handleSubmit}
                className="max-w-[350px] my-2 md:my-10 mx-auto"
              >
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    placeholder="Your name"
                    className="w-full backdrop-blur-2xl bg-gray-700 p-3 focus:outline-none text-gray-300 rounded-lg"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 font-bold text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email_from"
                    name="email_from"
                    placeholder="example@email.com"
                    className="w-full backdrop-blur-2xl bg-gray-700 p-3 focus:outline-none text-gray-300 rounded-lg"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="message"
                    className="block mb-2 font-bold text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Type here..."
                    className="w-full backdrop-blur-2xl bg-gray-700 p-3 focus:outline-none text-gray-300 rounded-lg"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-700 w-full hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg"
                >
                  Send
                </button>
              </form>
            </motion.div>
          </div>
        </div>
        <Footer home={true} />
      </motion.div>
    </>
  );
};

export default Contact;
