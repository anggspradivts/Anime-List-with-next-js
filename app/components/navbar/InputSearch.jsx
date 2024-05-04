import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

const InputSearch = () => {
  const searchRef = useRef();
  const [anime, setAnime] = useState(null);
  const [isSearchShow, setIsSearchShow] = useState(false);

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

  async function fetchData(searchTerm) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${searchTerm}&limit=7`
    );
    const anime = await response.json();
    return anime.data;
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    // e.stopPropagation();
    const searchTerm = searchRef.current.value;
    const searchAnime = await fetchData(searchTerm);
    setAnime(searchAnime);
    // setIsSearchShow(true)
  };

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
      <div className="relative w-full h-full" onClick={onSearchClick} tabIndex={0} role="button">
        <input
          className="bg-black w-full h-full right-0 p-2"
          type="search"
          placeholder="search anime..."
          name=""
          ref={searchRef}
        />
        <button className="search-icon absolute right-3 top-2" onClick={handleSearch}>
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
