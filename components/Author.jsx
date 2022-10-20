import Image from "next/image";
import React from "react";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-20 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute left-0 right-2 -top-14">
        <Image
          unoptimized
          alt={author.name}
          height="100px"
          width="100px"
          className="align-middle rounded-full"
          src={author.photo.url}
        />
        <h3 className="text-white my-4 mb-4 text-xl font-bold">
          {author.name}
        </h3>
        <p className="text-white text-ls">{author.bio}</p>
      </div>
    </div>
  );
};

export default Author;
