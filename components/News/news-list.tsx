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

  return (
    <main className="bg-gray-200 px-2">
      <ul>
        {paginatedNews.map((value, index) => (
          <News key={index} id={value} />
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 space-x-4 pb-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-600"
          }`}
        >
          Previous
        </button>

        <span className="px-4  py-2 bg-gray-300 rounded">
          Page {currentPage}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => (endIndex < news.length ? prev + 1 : prev))
          }
          disabled={endIndex >= news.length}
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            endIndex >= news.length
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
    </main>
  );
}
