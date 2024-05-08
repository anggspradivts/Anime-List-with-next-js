import React from "react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types"

const OtherRank = async ({ topPeople, topChar }) => {

  const peopleCard =
    Array.isArray(topPeople) &&
    topPeople.map((people, index) => {
    return (
      <div key={people.mal_id}>
        <Link href={people.url}>
          <div className="h-full w-[80px] bg-black bg-opacity-20 text-center">
            <div className="people-img-cont h-5/6">
              <Image
                className="w-full h-full"
                src={people.images.jpg.image_url}
                objectFit="cover"
                width={100}
                height={100}
                style={{ width: "full", height: "full" }}
                quality={90}
                alt={`${people.name} img`}
              />
            </div>
            <div className="people-name h-1/6 flex">
              <p className="text-[0.6rem]">{people.name}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  const charCard =
    Array.isArray(topChar) &&
    topChar.map((char, index) => {
      return (
        <div key={char.mal_id}>
          <Link href={char.url}>
            <div className="h-full w-[80px] text-center">
              <div className="people-img-cont h-5/6">
                <Image
                  className="w-full h-full"
                  src={char.images.webp.image_url}
                  objectFit="cover"
                  width={100}
                  height={100}
                  style={{ width: "full", height: "full" }}
                  quality={90}
                  alt={`${char.name} img`}
                />
              </div>
              <div className="people-name h-1/6">
                <p className="text-[0.6rem]">
                  {char.name.length > 10
                    ? char.name.substring(0, 10) + "..."
                    : char.name}
                </p>
              </div>
            </div>
          </Link>
        </div>
      );
    });

  return (
    <div className="grid grid-cols-1 gap-5 font-mono text-[0.7rem] sm:text-[1rem] h-1/2 sm:h-full">
      <div className="flex h-[150px]">
        <div className="w-[15%] h-full bg-blue-600 flex-col flex justify-center items-center font-serif">
          <h1>TOP</h1>
          <h1 className="text-2xl">10</h1>
          <h1>People</h1>
        </div>
        <div className="poeple-cont w-[85%] h-full flex overflow-x-scroll gap-3">
          {peopleCard}
        </div>
      </div>
      <div className="flex h-[150px]">
        <div className="w-[15%] h-full bg-white text-black flex-col flex justify-center items-center font-serif">
          <h1>TOP</h1>
          <h1 className="text-2xl">10</h1>
          <h1>Character</h1>
        </div>
        <div className="poeple-cont w-[85%] h-full flex overflow-x-scroll gap-3">
          {charCard}
        </div>
      </div>
      <div className="flex h-[150px]">
        <div className="w-[15%] bg-black flex-col flex justify-center items-center font-serif">
          <h1>TOP</h1>
          <h1 className="text-2xl">10</h1>
          <h1>People</h1>
        </div>
        <div className="poeple-cont w-[85%] flex overflow-x-scroll gap-3">
          {peopleCard}
        </div>
      </div>
    </div>
  );
};

export default OtherRank;

OtherRank.propTypes = {
  topPeople: PropTypes.arrayOf(
    PropTypes.shape({
      mal_id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      images: PropTypes.shape({
        jpg: PropTypes.shape({
          image_url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  topChar: PropTypes.arrayOf(
    PropTypes.shape({
      mal_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      images: PropTypes.shape({
        webp: PropTypes.shape({
          image_url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    })
  ).isRequired,
};