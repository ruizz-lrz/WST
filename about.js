// About.js
import React from 'react';

function About() {
  return (
    <main className="py-10 px-6 md:px-12 lg:px-24">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">Basic Information</h1>
        <section className="mb-6">
          <p><strong className="font-medium text-gray-700">Name:</strong> Lorenz B. Almoni </p>
          <p><strong className="font-medium text-gray-700">Age:</strong> 20 Years Old </p>
          <p><strong className="font-medium text-gray-700">Birthday:</strong> October 05, 2004</p>
          <p><strong className="font-medium text-gray-700">Address:</strong> Gingoog City, San Luis </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">My Favorites</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Fast Foods</li>
            <li>Ice cream and Cake</li>
            <li>Korean foods</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">My Hobbies</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Eating</li>
            <li>Singing</li>
            <li>Watching Movies/Series</li>
            <li>Exploring</li>
            <li>And Playing video games</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">My Goals</h2>
          <ol className="list-decimal list-inside text-gray-700">
            <li>To finish my college with my IT course.</li>
            <li>To have a successful career in tech.</li>
            <li>To travel to my dream country.</li>
            <li>To make a positive impact in my community.</li>
            <li>To provide a better life for my family.</li>
            <li>And to be contented.</li>
          </ol>
        </section>

        <h3 className="text-lg font-semibold text-gray-800">That's all about me and Thank You!.</h3>
        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>&copy; Copyright All Rights Reserved 2025 by Lorenz&Kenn </p>
        </footer>
      </div>
    </main>
  );
}

export default About;
