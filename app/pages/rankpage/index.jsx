import React from "react";

import RankAnime from "./RankAnime"

const RankList = async () => {
  const fetchAiring = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?filter=airing&limit=20`
  );
  const airAnime = await fetchAiring.json();
  const topAiringAnime = airAnime.data;

  const fetchUpcoming = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?filter=upcoming&limit=20`
  );
  const upcomingAnime = await fetchUpcoming.json();
  const topUpcomingAnime = upcomingAnime.data;

  return (
    <div className="lg:my-5">
      <div className="hotmanga-header h-[50px] sm:h-[70px] flex items-center bg-black bg-opacity-20 px-5">
        <h1 className="text-xl">🏆 Ranking List</h1>
      </div>
      <div className="ranking-container grid grid-cols-1 sm:grid-cols-2 p-5 gap-2">
        <RankAnime topAiringAnime={topAiringAnime} topUpcomingAnime={topUpcomingAnime}/>
        <div></div>
      </div>
      <div className="popular">
        
      </div>
    </div>
  );
};

export default RankList;
