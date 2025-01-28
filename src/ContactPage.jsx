
// acernity cimponents  

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";

const ContactPage = () => {

  const googleMapsLink =
    "https://www.google.com/maps/dir//Administrative+Building,+Rajkiya+Engineering+College,+Uttar+Pradesh+231312/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x398ef10d3a9a69b9:0x33a5956e97711e15?sa=X&ved=1t:57443&ictx=111";

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    try {
      setStatus("Sending message...");

      const serviceId = "originBlueServiceId";
      const templateId = "template_0bm8e2n";
      const userId = "OaJ_QhdKFo4kJQ6BU";

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        userId
      );

      setFormData({ name: "", email: "", message: "" });
      setStatus("Message sent successfully!");
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <BackgroundBeamsWithCollision>
      <div  className="w-screen h-max bg-black text-white flex flex-col items-center justify-between">
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-extrabold text-blue-500">Contact Us</h1>
          <p className="text-lg text-gray-400 mt-6">
            We are always looking for ways to improve our products and services. Contact us and let us know how we can help you.
          </p>
          <br />
          <p className="text-lg text-gray-400 mt-1 font-bold italic">"Your vision, our expertise—let’s create something extraordinary together."</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mt-10">
          {/* <div>
          <h5 className="text-lg font-bold  text-gray-400 mt-2">Feel Free To Reach Us:</h5>
        <div className="flex space-x-6 mt-10">
          <a href="tel:+919559555836" className="text-blue-500 hover:text-blue-700">
            <FaPhone className="text-3xl" />
          </a>
          <a href="https://wa.me/9580187515" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
            <FaWhatsapp className="text-3xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
            <FaInstagram className="text-3xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <FaTwitter className="text-3xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
            <FaLinkedin className="text-3xl" />
          </a>
        </div>
          </div> */}
          <div className="flex-1 p-4">
          <motion.div
            className="shadow-xl rounded-3xl p-8 w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-xl text-gray-400 mt-2 font-bold">MEET US HERE </h2>
            <br />
        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
          <img
            src="https://pro.aceternity.com/world.svg"
            alt="Our Location on Map"
            className="w-full rounded-lg shadow hover:opacity-90 transition"
          />
        </a>
          </motion.div>
      </div>
          <motion.div
            className="bg-gray-800 shadow-xl rounded-3xl p-8 w-full md:w-1/2"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 border border-gray-600 bg-black text-white rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
            {status && <p className="mt-4 text-center text-red-500 font-semibold">{status}</p>}
          </motion.div>
        </div>

        <div className="flex space-x-6 mt-20">
          <a href="tel:+919559555836" className="text-blue-500 hover:text-blue-700">
            <FaPhone className="text-3xl" />
          </a>
          <a href="https://wa.me/9580187515" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
            <FaWhatsapp className="text-3xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
            <FaInstagram className="text-3xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <FaTwitter className="text-3xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
            <FaLinkedin className="text-3xl" />
          </a>
        </div>

        <footer className="w-full bg-gray-900 text-white py-10 mt-20 text-center">
          <h2 className="text-3xl font-extrabold text-blue-500">OriginBleu</h2>
          <p>© 2025 OriginBleu. All rights reserved.</p>
        </footer>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default ContactPage;


