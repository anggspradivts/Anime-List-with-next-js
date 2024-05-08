import React from "react";

import RankAnime from "./RankAnime"
import OtherRank from "./OtherRank"

const RankList = async () => {
  //Airing
  const fetchAiring = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?filter=airing&limit=20`
  );
  const airAnime = await fetchAiring.json();
  const topAiringAnime = airAnime.data;

  //Upcoming
  const fetchUpcoming = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?filter=upcoming&limit=20`
  );
  const upcomingAnime = await fetchUpcoming.json();
  const topUpcomingAnime = upcomingAnime.data;

  //People
  const resPeople = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/people?limit=10`)
  const peopleData = await resPeople.json();
  const topPeople = peopleData.data;

  //Character
  const resChar = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/characters?limit=10`)
  const charData = await resChar.json();
  const topChar = charData.data;

  return (
    <div className="lg:my-5 mb-40 sm:mb-20">
      <div className="hotmanga-header h-[50px] sm:h-[70px] flex items-center bg-black bg-opacity-20 px-5">
        <h1 className="text-xl">🏆 Ranking List</h1>
      </div>
      <div className="ranking-container grid grid-cols-1 sm:grid-cols-2 p-5 gap-10 lg:gap-5 h-[500px]">
        <RankAnime topAiringAnime={topAiringAnime} topUpcomingAnime={topUpcomingAnime}/>
        <OtherRank topPeople={topPeople} topChar={topChar}/>
      </div>
      <div className="popular">
        
      </div>
    </div>
  );
};

export default RankList;
