import React from "react";
import Link from "next/link";
import Image from "next/image";

const RankAnime = ({ topAiringAnime, topUpcomingAnime }) => {
  const topAiringCard = topAiringAnime.map((anime, index) => {
    return (
      <Link key={index} href={`/anime/${anime.mal_id}/`}>
        <div className="flex h-[60px] mb-3 bg-black bg-opacity-10 hover:bg-opacity-20">
          <div className="rank w-[20%] h-full bg-black flex justify-center items-center">
            <h1 className="text-2xl font-bold">{index + 1}</h1>
          </div>
          <div className="image-container h-full w-[20%]">
            <Image
              className="w-full h-full"
              src={anime.images.webp.image_url}
              objectFit="cover"
              width={50}
              height={50}
              style={{ width: "full", height: "full" }}
              quality={90}
              alt={`${anime.title} img`}
            />
          </div>
          <div className="text-[0.7rem] w-[60%] p-0 sm:pl-2">
            <h1 className="">{anime.title}</h1>
          </div>
        </div>
      </Link>
    );
  });

  const topUpcomingCard = topUpcomingAnime.map((anime, index) => {
    return (
      <Link key={index} href={`/anime/${anime.mal_id}/`}>
        <div className="flex h-[60px] mb-3 bg-black bg-opacity-10 hover:bg-opacity-20">
          <div className="rank w-[20%] h-full bg-black flex justify-center items-center">
            <h1 className="text-2xl font-bold">{index + 1}</h1>
          </div>
          <div className="image-container h-full w-[15%] sm:w-[20%]">
            <Image
              className="w-full h-full"
              src={anime.images.webp.image_url}
              objectFit="cover"
              width={50}
              height={50}
              style={{ width: "full", height: "full" }}
              quality={90}
              alt={`${anime.title} img`}
            />
          </div>
          <div className="text-[0.7rem] w-[60%] p-0 pl-2">
            <h1 className="">{anime.title}</h1>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="ranklist grid grid-cols-2 gap-5 h-[250px] sm:h-full overflow-y-scroll">
      <div className="">
        <div className="header bg-black p-5 lg:mb-3">
          <h1>Top Airing</h1>
        </div>
        <div className="gap-5">{topAiringCard}</div>
      </div>
      <div>
        <div className="header bg-black p-5 lg:mb-3">
          <h1>Top Upcoming</h1>
        </div>
        <div className="gap-5">{topUpcomingCard}</div>
      </div>
    </div>
  );
};

export default RankAnime;
