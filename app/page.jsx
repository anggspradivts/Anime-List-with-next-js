// "use client"
import Layout from "./components/Layout";
import FilterPage from "./components/homepage/filterpage";
import TopAiring from "./components/homepage/topairingpage";
import RankingList from "./components/homepage/rankpage";
// import MyApp from "./SessionProvider";

export default async function Home() {
  const topAnimeAirRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?filter=airing&limit=12`
  );
  const airAnime = await topAnimeAirRes.json();
  const topAirAnime = airAnime.data;
  // console.log("render")

  return (
    <main className="">
      <TopAiring airAnime={topAirAnime} />
      <FilterPage />
      <RankingList />
    </main>
  );
}
