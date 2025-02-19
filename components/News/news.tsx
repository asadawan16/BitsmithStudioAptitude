"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchstory } from "@/utils/fetchdata";
import { IoTriangle } from "react-icons/io5";

interface NewsProps {
  id: number;
  index: number; // Accept index as a prop
}
export default function News({ id, index }: NewsProps) {
  const [news, setNews] = useState<any>(null);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchstory(id);
      setNews(data);
    };
    getNews();
  }, [id]);

  if (!news) {
    return <p className="text-gray-600">Loading...</p>;
  }
  const domain = news.url ? news.url.split("/")[2].replace("www.", "") : "";

  return (
    <li className="flex flex-col py-1 gap-1" key={id}>
      <Link href={`${news.url}`}>
        <div className="flex items-center">
          <span className="text-xs text-gray-600 mr-1">{index + 1}.</span>
          <span>
            <IoTriangle className="text-gray-600 size-2 mr-2" />
          </span>
          <h2 className="text-black text-base font-serif max-w-screen-md">
            {news.title}
            <span className="text-gray-600 text-xs ml-3">({domain})</span>
          </h2>
        </div>

        <div>
          <span className="text-xs ml-9   text-gray-600 ">
            {+news.score} points by {news.by + "  "}
            {(Date.now() / 1000 - news.time) / 3600 > 24
              ? `${Math.floor(
                  (Date.now() / 1000 - news.time) / 86400
                )} days ago`
              : `${Math.floor(
                  (Date.now() / 1000 - news.time) / 3600
                )} hours ago`}
          </span>
          <span className=" ml-2 text-xs text-gray-600">
            {news.score} comments
          </span>
        </div>
      </Link>
    </li>
  );
}
