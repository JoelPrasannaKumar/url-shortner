// src/app/contact/page.js
import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-red-600">Contact Us</h1>

      <p className="text-lg mb-8 text-center">
        We would love to hear from you! Whether you have a question, feedback, or need support — feel free to reach out.
      </p>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            rows="5"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-300 cursor-pointer"
        >
          Send Message
        </button>
      </form>

      <p className="text-center text-sm mt-8 text-gray-600">
        You can also reach us directly at <a href="mailto:support@shortlyapp.com" className="text-red-600 underline">support@shortlyapp.com</a>
      </p>
    </div>
  );
};

export default ContactPage;
