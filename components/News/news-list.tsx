"use client";
import News from "@/components/News/news";
import { fetchData } from "@/utils/fetchdata";
import { useEffect, useState } from "react";

export default function NewsList() {
  const [news, setNews] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25; // Number of items per page

  useEffect(() => {
    const fetchNews = async () => {
      const data = await fetchData();
      console.log(data, "data from fetchdata");
      if (data) {
        setNews(data);
      }
    };
    fetchNews();
  }, []);

  // Calculate the range of IDs for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedNews = news.slice(startIndex, endIndex);
  const totalPages = Math.ceil(news.length / itemsPerPage);

  return (
    <main className="bg-gray-50 px-2">
      <ul>
        {paginatedNews.map((value, index) => (
          <News key={index} index={startIndex + index} id={value} />
        ))}
      </ul>

      {/* Pagination Controls */}

      {/* Pagination Section */}
      <div className="flex justify-center flex-wrap gap-2 mt-4 space-x-2 pb-3">
        {Array.from({ length: totalPages }, (_, pageIndex) => (
          <button
            key={pageIndex + 1}
            onClick={() => setCurrentPage(pageIndex + 1)}
            className={`px-3 py-2 rounded ${
              currentPage === pageIndex + 1
                ? "bg-orange-600 text-white font-bold"
                : "bg-gray-300 text-black hover:bg-gray-400"
            }`}
          >
            {pageIndex + 1}
          </button>
        ))}
      </div>
    </main>
  );
}
