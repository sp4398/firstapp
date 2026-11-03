"use client";
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

export default function Banner() {

  let [modal, setModal] = useState(false);

  let openEnquireForm = () => {
    console.log("Enquire Now button clicked");
  };

  return (
    <>
      <div
        className={`w-[350px] fixed duration-300 ${modal ? 'top-[50%]' : 'top-[-1000px]'} left-[50%] transform translate-x-[-50%] translate-y-[-50%] `}
      >
        
        <form className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold relative text-center">
          Enquire Now{" "}
          <button onClick={() => setModal(false)} type="button" className="absolute top-0 right-0 cursor-pointer">
            <IoIosClose />
          </button>
        </h2>
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
            onClick={() => setModal(true)}
            className="bg-white p-3 text-gray-500 cursor-pointer rounded"
          >
            Enquire Now
          </button>
        </div>
      </section>
    </>
  );
}
