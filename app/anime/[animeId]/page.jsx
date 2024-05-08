import React from "react";
import Image from "next/image";
import Link from "next/link";
import CharacterSec from "./CharacterSec"

import Sidebar from "./Sidebar"

const AnimeDetail = async ({ params }) => {
  const { animeId } = params;

  const fullAnimeDetail = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${animeId}/full`
  );
  const data = await fullAnimeDetail.json();
  const animeDetail = data.data;

  return (
    <div className="grid min-h-[100vh] grid-cols-3 text-[0.5rem] md:text-[0.9rem]">
      <div className="main-detail col-span-2">
        <div className="detail-title lg:p-5 bg-black bg-opacity-15">
          <h1 className="text-2xl">
            {animeDetail.title}
          </h1>
          <p>{animeDetail.year}</p>
        </div>
        <div className="rating-sec grid grid-cols-4 w-full gap text-center bg-black bg-opacity-5">
          <div className="score p-5">
            <h1>Score</h1>
            <p className="font-bold">{animeDetail.score}</p>
          </div>
          <div className="rank p-5">
            <h1>Rank</h1>
            <p className="font-bold">#{animeDetail.rank}</p>
          </div>
          <div className="popularity p-5">
            <h1>Popularity</h1>
            <p className="font-bold">#{animeDetail.popularity}</p>
          </div>
          <div className="member p-5">
            <h1>Members</h1>
            <p className="font-bold">{animeDetail.members.toLocaleString()}</p>
          </div>
        </div>
        <hr />
        <div className="long-text lg:p-2">
          <div className="synopsis-sec mb-5 font-mono">
            <div className="synopsis-header bg-black font-mono font-bold">Synopsis</div>
            <hr />
            <div className="synopsis min-h-72 pt-5">
              <p>{animeDetail.synopsis}</p>
            </div>
          </div>
          <div className="background-sec min-h-72">
            <div className="background-header bg-black font-mono font-bold">Background</div>
            <hr />
            <div className="background pt-5 font-mono">
              <p>{animeDetail.background ? animeDetail.background : "No Background Provided From API"}</p>
            </div>
          </div>
        </div>
        <div className="character p-2">
          <CharacterSec animeDetail={animeDetail} animeId={animeId} />
        </div>
      </div>
      <div className="sidebar bg-black bg-opacity-15 p-4 sm:p-8">
        <Sidebar animeDetail={animeDetail} />
      </div>
    </div>
  );
};

export default AnimeDetail;
