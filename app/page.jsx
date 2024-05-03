import Layout from "./components/Layout"
import HotManga from "./pages/TopAnime"
import TopAiring from "./pages/TopAiring"
import RankingList from "./pages/RankingList";

export default async function Home() {

  const topAnimeRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12`)
  const anime = await topAnimeRes.json()
  const topAnime = anime.data

  const topAnimeAirRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?filter=airing&limit=12`)
  const airAnime = await topAnimeAirRes.json();
  const topAirAnime = airAnime.data

  return (
    <main className="">
      <TopAiring airAnime={topAirAnime} />
      <HotManga topAnime={topAnime} />
      <RankingList />
    </main>
  );
}
