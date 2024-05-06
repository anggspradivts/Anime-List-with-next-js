import Layout from "./components/Layout"
import TopAnime from "./pages/TopAnime"
import TopAiring from "./pages/TopAiring"
import RankingList from "./pages/RankingList";

export default async function Home() {

  

  const topAnimeAirRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?filter=airing&limit=12`)
  const airAnime = await topAnimeAirRes.json();
  const topAirAnime = airAnime.data

  return (
    <main className="">
      <TopAiring airAnime={topAirAnime} />
      <TopAnime />
      <RankingList />
    </main>
  );
}
