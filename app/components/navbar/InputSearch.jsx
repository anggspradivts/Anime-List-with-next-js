import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

const InputSearch = () => {
  const searchRef = useRef();
  const [keyword, setKeyword] = useState("");
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [anime, setAnime] = useState('')

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
    setAnime(searchAnime)
  }
  const handleChange = (event) => {
    setKeyword(event.target.value)
  }
  useEffect(() => {
    fetchData(keyword)
  } ,[keyword])
  //

  const searchCard =
    anime &&
    Array.isArray(anime) &&
    anime.map((anime, index) => {
      return (
        <div key={index} className="bg-black text-white">
          {anime.title}
        </div>
      );
    });

  return (
    <div className="flex-col ">
      <div className="relative w-full h-full" onClick={onSearchClick} tabIndex={0} role="button" ref={searchRef}>
        <input
          className="bg-black w-full h-full right-0 p-2"
          type="search"
          placeholder="search anime..."
          value={keyword}
          name=""
          onChange={handleChange}
        />
        <button className="search-icon absolute right-3 top-2">
          <MagnifyingGlass size={22} />
        </button>
      {isSearchShow && (
        <div className="absolute top-15 bg-black p-2 w-full overflow-y-scroll">
          {searchCard ? searchCard : (<p>Eg. 'naruto'</p>)}
        </div>
      )}
      </div>
    </div>
  );
};

export default InputSearch;
