import React from "react";
import Image from "next/image";
import Link from "next/link";

const TopAnime = ({ topAnime }) => {
  const hotMangaCard = topAnime.map((anime, index) => {
    return (
      <div key={index} className="manga bg-black bg-opacity-5">
        <Link href={`/anime/${anime.mal_id}/`}>
          <div className="image-container sm:h-5/6 ">
            <Image
              className="w-1/4 h-full sm:w-full "
              src={anime.images.webp.image_url}
              objectFit="cover"
              width={200}
              height={200}
              style={{ width: "full", height: "full" }}
              quality={90}
            />
          </div>
          <h1 className="anime-title text-center bg-black bg-opacity-20 sm:h-1/6 ">
            {anime.title.length > 18
              ? anime.title.substring(0, 18) + "..."
              : anime.title}
          </h1>
        </Link>
      </div>
    );
  });

  return (
    <div className="lg:my-5">
      <div className="hotmanga-header h-[50px] sm:h-[70px] flex items-center justify-between bg-black bg-opacity-20 px-5">
        <h1 className="text-xl">Filter By</h1>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">
            Filter
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-2"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="hotmanga-container grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-6 text-center p-5 gap-2">
        {hotMangaCard}
      </div>
      <div className="flex justify-center items-center p-5">
        <button className="before:ease relative h-12 w-40 overflow-hidden border border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32">
          Show All
        </button>
      </div>
    </div>
  );
};

export default TopAnime;
