import React from "react";

export default function Banner() {
  return (
    <section className="bg-[url('https://pinnacle-khaki.vercel.app/mediaFiles/Gallery/project/1.webp')] bg-cover bg-center w-full h-[500px]">
      <div className="max-w-[1280px] max-auto h-full flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl text-white text-center mt-20">
          Welcome to my first Next.js App <br /> FirstApp
        </h1>
        <button className="bg-white p-3 text-gray-500 cursor-pointer rounded">Enquire Now</button>
      </div>
    </section>
  );
}
