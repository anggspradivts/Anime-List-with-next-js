import React from "react";
import Image from "next/image";

const latestUpdated = ({  }) => {
  return (
    <div className="lg:my-5">
      <div className="latestupdate-header h-[50px] sm:h-[70px] flex items-center bg-black bg-opacity-10 px-5">
        <h1 className="text-xl">🕜 Latest Update</h1>
      </div>
      <div className="latestupdate-container grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-6 text-center p-5 gap-2">
        <div className="manga bg-black bg-opacity-5  relative">
          <Image
            className="w-1/4 sm:w-full md:w-full lg:w-full xl:w-full"
            src="https://placehold.co/400x400"
            objectFit="cover"
            width={50}
            height={50}
            style={{ width: "full", height: 'full'}}
          />
          <h1 className="absolute bottom-0 left-0 right-0 text-center">Manga 1</h1>
        </div>
        <div className="manga bg-black bg-opacity-5">
          <h1></h1>
        </div>
        <div className="manga bg-black bg-opacity-5">
          <h1>Manga 1</h1>
        </div>
        <div className="manga bg-black bg-opacity-5  relative">
          <Image
            className="w-1/4 sm:w-full md:w-full lg:w-full xl:w-full"
            src="https://placehold.co/400x400"
            objectFit="cover"
            width={50}
            height={50}
            style={{ width: "full", height: 'full'}}
          />
          <h1 className="absolute bottom-0 left-0 right-0 text-center">Manga 1</h1>
        </div>
        <div className="manga bg-black bg-opacity-5  relative">
          <Image
            className="w-1/4 sm:w-full md:w-full lg:w-full xl:w-full"
            src="https://placehold.co/400x400"
            objectFit="cover"
            width={50}
            height={50}
            style={{ width: "full", height: 'full'}}
          />
          <h1 className="absolute bottom-0 left-0 right-0 text-center text-black">Manga 1</h1>
        </div>
      </div>
      <div className="flex justify-center items-center p-5">
        <button className="p-2 bg-black bg-opacity-5 rounded-md">
          Load More
        </button>
      </div>
    </div>
  );
};

export default latestUpdated;
