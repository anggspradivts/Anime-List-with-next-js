import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link"

import debounce from "/app/utils/debounce.js";

const InputSearch = () => {
  const searchRef = useRef();
  const [keyword, setKeyword] = useState("");
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [anime, setAnime] = useState("");

  // click outside ui
  const handleClickOutside = (event) => {
    if (!searchRef.current.contains(event.target)) {
      setIsSearchShow(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const onSearchClick = () => {
    setIsSearchShow(true);
  };
  // click outside ui

  //
  async function fetchData(keyword) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}&limit=7`
    );
    const fetchAnime = await response.json();
    const searchAnime = fetchAnime.data;
    setAnime(searchAnime);
  }
  const handleChange = (event) => {
    if (event && event.target) {
      setKeyword(event.target.value);
    }
  };

  useEffect(() => {
    if (keyword.length > 2) {
      const delayDebounceFn = setTimeout(() => {
        fetchData(keyword);
      }, 500);

      // Clear the timeout when the component unmounts or keyword changes
      return () => clearTimeout(delayDebounceFn);
    } else {
      setAnime([]);
    }
  }, [keyword]);

  useEffect(() => {
    setAnime([]);
  }, [keyword]);

  const searchCard =
    anime &&
    Array.isArray(anime) &&
    anime.map((anime, index) => {
      return (
        <Link key={index} href={`/anime/${anime.mal_id}`}>
          <div className="bg-blue bg-opacity-10 text-white w-full text-[0.7rem] h-[100px] flex gap-2">
            <div className="search-image h-3/4 w-1/4">
              <Image 
                className="w-full h-full sm:w-full "
                src={anime.images.webp.image_url}
                objectFit="cover"
                width={200}
                height={200}
                style={{ width: "full", height: "full" }}
                quality={90}
                alt={`${anime.title} img`}
              />
            </div>
            <div className="w-3/4">
              <p className="font-bold">{anime.title}</p>
              <p>{anime.year}</p>
            </div>
          </div>
        </Link>
      );
    });

  return (
    <div className="flex-col ">
      <div
        className="relative w-full h-full"
        onClick={onSearchClick}
        // tabIndex={0}
        // role="button"
        ref={searchRef}
      >
        <input
          className="bg-black w-full h-full right-0 p-2"
          type="search"
          placeholder="search anime..."
          value={keyword}
          onChange={handleChange}
        />
        <button className="search-icon absolute right-3 top-2">
          <MagnifyingGlass size={22} />
        </button>
        {isSearchShow && (
          <div className="absolute top-15 bg-black p-2 w-full overflow-y-scroll max-h-[400px]">
            {keyword ? searchCard : <p>Eg. &quot;naruto&quot;</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputSearch;
