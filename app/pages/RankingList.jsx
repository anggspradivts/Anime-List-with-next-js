import React from "react";
import Image from "next/image";
import Link from "next/link";

const RankList = async () => {
  const fetchAiring = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?filter=airing&limit=10`
  );
  const airAnime = await fetchAiring.json();
  const topAiringAnime = airAnime.data;

  const fetchUpcoming = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?filter=upcoming&limit=10`
  );
  const upcomingAnime = await fetchUpcoming.json();
  const topUpcomingAnime = upcomingAnime.data;

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
          <div className="image-container h-full w-[20%]">
            <Image
              className="w-full h-full"
              src={anime.images.webp.image_url}
              objectFit="cover"
              width={50}
              height={50}
              style={{ width: "full", height: "full" }}
              quality={90}
            />
          </div>
          <div className="text-[0.7rem] w-[60%] p-0 sm:pl-2">
            <h1 className="">{anime.title}</h1>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="lg:my-5">
      <div className="hotmanga-header h-[50px] sm:h-[70px] flex items-center bg-black bg-opacity-20 px-5">
        <h1 className="text-xl">🏆 Ranking List</h1>
      </div>
      <div className="hotmanga-container grid grid-cols-2 p-5 gap-2">
        <div className="ranklist grid sm:grid-cols-2 gap-5 h-[50vh] overflow-y-scroll">
          <div className="hidden sm:block">
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
        <div></div>
      </div>
      {/* <div className="flex justify-center items-center p-5">
        <button className="before:ease relative h-12 w-40 overflow-hidden border border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32">
          Show All
        </button>
      </div> */}
    </div>
  );
};

export default RankList;
