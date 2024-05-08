"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const TopAnime = () => {
  const [filter, setFilter] = useState(["Bypopularity", "Favorite", "Upcoming"]); //list filter
  const [anime, setAnime] = useState([]); //anime list
  const [filterHeader, setFilterHeader] = useState("") //query params n header

  const fetchData = async () => {
    const topAnimeRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12&filter=${filterHeader}`);
    const anime = await topAnimeRes.json()
    const topAnime = anime.data
    setAnime(topAnime)
  }

  useEffect(() => {
    fetchData()
  }, [filterHeader]) //filterHeader is set to empty string to fetch the default top anime when reload page

  const handleFilterChange = (newFilter) => {
    // setAnime([])
    setFilterHeader(newFilter)
    fetchData()
  }

  const FilterList = filter && Array.isArray(filter) && filter.map((filter, index) => {
    return (
      <li key={index}>
        <a onClick={() => handleFilterChange(filter)}>By {filter}</a>
      </li>
    )
  })

  const animeCard = anime && Array.isArray(anime) && anime.map((anime, index) => {
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
    <div className="lg:my-5">
      <div className="hotmanga-header h-[50px] sm:h-[70px] flex items-center justify-between bg-black bg-opacity-20 px-5">
        <h1 className="text-xl font-bold font-mono">Filter By <span className="font-extrabold text-yellow-200">{filterHeader === "" ? "Top" : filterHeader}</span></h1>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">
            FILTER
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-2"
          >
            {FilterList}
          </ul>
        </div>
      </div>
      <div className="hotmanga-container grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-6 text-center p-5 gap-2">
        {animeCard}
      </div>
      <div className="flex justify-center items-center p-5">
        <button className="bg-black p-4 w-[200px] rounded-md hover:bg-opacity-40 hover:text-blue-300">
          <span className="hover:border-white">Show All {filterHeader === "" ? "Top" : filterHeader}</span>
        </button>
      </div>
    </div>
  );
};

export default TopAnime;
