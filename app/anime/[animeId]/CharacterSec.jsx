import React from 'react'
import Image from "next/image"

const Character = async ({ animeId }) => {
  const characterByAnime = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/characters`);
  const data = await characterByAnime.json();
  const character = data.data;
  const filterChar = character.slice(0, 10)

  const charCard = filterChar.map((char, index) => (
    <div className="character flex gap-4" key={index}>
      <Image
        className="w-1/6 h-3/4"
        src={char.character.images.webp.image_url}
        objectFit="cover"
        width={50}
        height={50}
        style={{ width: "full", height: "full" }}
        quality={90}
        alt='character'
      />
      <div>
        <h1 className='font-bold'>{char.character.name}</h1>
        <p>{char.role} Character</p>
      </div>
    </div>
  ))

  return (
    <div className="character-sec">
      <div className="detail-header">
        <h1 className='bg-black'>Character Section Header</h1>
        <hr />
      </div>
      <div className='grid grid-cols-2'>
        {charCard}
        <div className='col-span-2 flex justify-center'>
          <button className='bg-black p-1'>Load More</button>
        </div>
      </div>
    </div>
  )
}

export default Character