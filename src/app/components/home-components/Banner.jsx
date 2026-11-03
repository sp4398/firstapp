"use client";
import React from "react";

export default function Banner() {
  let openEnquireForm = () => {
    console.log("Enquire Now button clicked");
  };

  return (
    <>
      <div
        className={`w-[350px] fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] `}
      >
        <h2 className="text-2xl font-bold text-center">Enquire Now</h2>
        <form className="bg-white p-6 rounded shadow-md">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
      <section className="bg-[url('https://pinnacle-khaki.vercel.app/mediaFiles/Gallery/project/1.webp')] bg-cover bg-center w-full h-[500px]">
        <div className="max-w-[1280px] max-auto h-full flex flex-col items-center justify-center gap-6">
          <h1 className="text-4xl font-bold text-white text-center mt-20">
            GS REAL STATE <br />
          </h1>
          <button
            onClick={openEnquireForm}
            className="bg-white p-3 text-gray-500 cursor-pointer rounded"
          >
            Enquire Now
          </button>
        </div>
      </section>
    </>
  );
}
