import React from "react";
import Image from "next/image";
import Link from "next/link"

const latestUpdated = ({ airAnime }) => {

  const topAirAnimeCard = airAnime.map((anime, index) => {
    return (
      <div key={index} className="manga bg-black bg-opacity-5">
        <Link href={`/anime/${anime.mal_id}/`}>
          <div className="sm:h-[300px]">
            <div className="image-container sm:h-5/6 ">
              <Image
                className="w-1/4 h-full sm:w-full"
                src={anime.images.webp.image_url}
                objectFit="cover"
                width={200}
                height={200}
                style={{ width: "full", height: "full" }}
                quality={90}
                alt={`${anime.title} img`}
              />
            </div>
            <h1 className="anime-title text-center bg-black bg-opacity-20 sm:h-1/6 ">
              {anime.title.length > 18 ? (anime.title.substring(0, 18) + "...") : (anime.title)}
            </h1>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="lg:my-5 text-[0.9rem]">
      <div className="latestupdate-header h-[50px] sm:h-[70px] flex items-center bg-black bg-opacity-10 px-5">
        <h1 className="text-xl font-bold font-mono">🔥Top Airing Anime</h1>
      </div>
      <div className="latestupdate-container grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-6 text-center p-5 gap-2">
        {topAirAnimeCard}
      </div>
      <div className="flex justify-center items-center p-5">
        <button className="bg-black p-4 w-[200px] rounded-md hover:bg-opacity-40 hover:text-blue-300">
          <span className="hover:border-white">Show All </span>
        </button>
      </div>
    </div>
  );
};

export default latestUpdated;
