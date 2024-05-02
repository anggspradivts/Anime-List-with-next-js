import Layout from "./components/Layout"
import HotManga from "./pages/HotManga"
import LatestUpdated from "./pages/LatestUpdated"

export default async function Home() {

  const topAnimeRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
  const anime = await topAnimeRes.json()
  const topAnime = anime.data.map(data => {
    return {
      id: data.mal_id,
      title: data.title,
      image: data.images.webp.image_url
    }
  })

  return (
    <main>
      <HotManga topAnime={topAnime} />
      <LatestUpdated topAnime={topAnime} />
    </main>
  );
}
