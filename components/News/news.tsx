import { fetchstory } from "@/utils/fetchdata";
import Link from "next/link";

export default async function News({ id }: { id: number }) {
  const news = await fetchstory(id);

  if (!news) {
    return <p className="text-gray-600">Loading...</p>;
  }

  return (
    <li className="flex flex-col py-2 gap-3" key={id}>
      <div className="flex items-center">
        <span className="text-sm text-gray-600 mr-2">{news.id}</span>
        <h2 className="text-black text-sm">{news.title}</h2>
        <span className="text-gray-600 text-xs ml-3">({news.by})</span>
      </div>

      <div>
        <span className="text-xs ml-3 text-gray-600 px-10">
          {news.score} points
        </span>
        <span className="text-xs ml-1 text-gray-600">
          Time:{" "}
          {(Date.now() / 1000 - news.time) / 3600 > 24
            ? `${Math.floor((Date.now() / 1000 - news.time) / 86400)} days ago`
            : `${Math.floor((Date.now() / 1000 - news.time) / 3600)} hours ago`}
        </span>
      </div>

      {news.url && (
        <Link href={news.url} className="text-blue-500 hover:underline">
          Read More
        </Link>
      )}
    </li>
  );
}
