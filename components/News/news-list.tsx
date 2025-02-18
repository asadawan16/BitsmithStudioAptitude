import News from "@/components/News/news";
import { fetchData } from "@/utils/fetchdata";
import { useEffect, useState } from "react";
export default function NewsList() {
  interface NewsItem {
    id: number;
    title: string;
    url?: string;
  }

  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await fetchData();
      if (data) {
        setNews([data]);
      }
    };

    fetchNews();
  }, []);
  return (
    <main className="bg-gray-200 px-2">
      <ul>
        {news?.map((news) => {
          return <News key={news.id} id={news.id} />;
        })}
      </ul>
    </main>
  );
}
