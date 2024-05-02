import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = ({ animeDetail }) => {
  return (
    <>
      <div className="detail-img-cont ">
        <Image
          className="w-full sm:w-full md:w-full lg:w-full xl:w-full"
          src={animeDetail.images.webp.image_url}
          objectFit="cover"
          width={50}
          height={50}
          style={{ width: "full", height: "full" }}
          quality={90}
          alt={`${animeDetail.title} Image`}
        />
      </div>
      <div className="information-sec my-2">
        <div className="information-header my-1">
          <p>Information</p>
        </div>
        <hr />
        <div className="information my-1">
          <p>
            Type: <span>{animeDetail.type}</span>
          </p>
          <p>
            Episodes: <span>{animeDetail.episodes}</span>
          </p>
          <p>
            Duration: <span>{animeDetail.duration}</span>
          </p>
          <p>
            Rating: <span className="font-bold">{animeDetail.rating}</span>
          </p>
          <p>
            Status: <span>{animeDetail.status}</span>
          </p>
          <p>
            Aired: <span>{animeDetail.aired.string}</span>
          </p>
          <p>
            Producers:{" "}
            {animeDetail.producers.map((producer, index) => (
              <Link href={producer.url}>
                <span
                  className="hover:text-blue-400 font-bold"
                  key={producer.mal_id}
                >
                  {producer.name}
                  {index < animeDetail.producers.length - 1 ? ", " : ""}
                </span>
              </Link>
            ))}
          </p>
          <p>
            Licensors:{" "}
            {animeDetail.licensors.map((licensor, index) => (
              <Link href={licensor.url}>
                <span className="hover:text-blue-400 font-bold" key={index}>
                  {licensor.name}
                  {index < animeDetail.licensors.length - 1 ? ", " : ""}
                </span>
              </Link>
            ))}
          </p>
          <p>
            Genres:{" "}
            {animeDetail.genres.map((genre, index) => (
              <Link href={genre.url}>
                <span
                  className="hover:text-blue-400 font-bold"
                  id={genre.mal_id}
                  key={index}
                >
                  {genre.name}
                  {index < animeDetail.genres.length - 1 ? ", " : ""}
                </span>
              </Link>
            ))}
          </p>
          <p>
            Demographics:{" "}
            {animeDetail.demographics.map((demographic, index) => (
              <Link href={demographic.url}>
                <span
                  className="hover:text-blue-400 font-bold"
                  id={demographic.mal_id}
                  key={index}
                >
                  {demographic.name}
                  {index < animeDetail.demographics.length - 1 ? ", " : ""}
                </span>
              </Link>
            ))}
          </p>
        </div>
      </div>
      <div className="record-sec my-2">
        <div className="record-header my-1">
          <p>Information</p>
        </div>
        <hr />
        <div className="record my-1">
          <p>Score: <span className="font-italic">{animeDetail.score}</span></p>
          <p>Scored By: {animeDetail.scored_by}</p>
          <p>Rank: {animeDetail.rank}</p>
          <p>Popularity: {animeDetail.popularity}</p>
          <p>Members: {animeDetail.members}</p>
          <p>Favorites: {animeDetail.favorites}</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
