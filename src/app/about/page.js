// src/app/about/page.js
import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 my-11">
      <h1 className="text-4xl font-bold mb-10  text-red-600">About URL Shortener</h1>
      <p className="text-lg mb-4">
        Our URL Shortener is a simple and fast tool designed to help you transform long, messy URLs into short, clean links that are easy to share and remember.
      </p>
      <p className="text-lg mb-4">
        Whether you're sharing links on social media, in emails, or anywhere online, our app makes link management easy and efficient. Built using <strong>Next.js</strong>, it supports server-side rendering and fast routing to ensure a smooth user experience.
      </p>
      <p className="text-lg mb-4">
        We also provide features like custom short links, link tracking (if added), and a minimalistic dashboard to manage your URLs. Your data privacy and performance are our top priorities.
      </p>
      <p className="text-lg">
        This project is open-source and built by <strong>Joel Prasanna Kumar</strong>
      </p>
    </div>
  );
};

export default AboutPage;
