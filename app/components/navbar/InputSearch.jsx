import React, { useRef, useState } from "react";
import Image from "next/image";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

const InputSearch = () => {
  const searchRef = useRef();
  const [anime, setAnime] = useState(null)

  async function fetchData(searchTerm) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${searchTerm}&limit=15`);
    const anime = await response.json();
    return anime.data
  }
  
  const handleSearch = async (e) => {
    e.preventDefault();
    const searchTerm = searchRef.current.value;
    const searchAnime = await fetchData(searchTerm);
    setAnime(searchAnime);
  }

  const searchCard = anime && Array.isArray(anime) && anime.map((anime, index) => {
    return (
      <div key={index} className="bg-black text-white">
        {anime.title}
      </div>
    )
  })

  return (
    <div className="flex-col w-[500px] h-[40px]">
      <div className="relative w-full h-full">
        <input
          className="bg-black w-full h-full right-0 p-2 pr-10"
          type="search"
          placeholder="search anime..."
          name=""
          ref={searchRef}
        />
        <button className="absolute right-3 top-2" onClick={handleSearch}>
          <MagnifyingGlass size={22} />
        </button>
      </div>
      <div className="absolute top-15 bg-black p-2">
        {searchCard}
      </div>
    </div>
  );
};

export default InputSearch;
