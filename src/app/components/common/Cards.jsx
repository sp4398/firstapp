import React from "react";

export default function Cards({ product }) {
  return (
    <figure className="bg-white rounded-lg shadow-md p-4">
      <img
        src="https://pinnacle-khaki.vercel.app/mediaFiles/Gallery/project/1.webp"
        alt="Card "
      />
      <h3 className="text-black text-xl" >
        {product}
      </h3>
      <p className="text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc
        nisl eget nunc.
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        View Details
      </button>
    </figure>
  );
}
