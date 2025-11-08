"use client";
import Blogs from "@/components/Blogs";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

interface Blog {
  id: number;
  title: string;
  content: string[];
  subsections: Blog[];
}

interface BlogResponse {
  subsections: Blog[];
  error?: string;
}

export default function Page() {
  const [data, setData] = useState<BlogResponse | null>(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/blogs");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setData({ subsections: [], error: "Failed to load blogs" });
      }
    }
    fetchData();
  }, []);

  if (!data) {
    return <Loader />;
  }

  if (data.error) {
    return <div className="text-center text-red-500">{data.error}</div>;
  }

  const formattedData = {
    id: 0,
    title: "Blog Posts",
    content: [],
    subsections: data.subsections,
    data: data.subsections
  };

  return (
    <div
      className="flex flex-col gap-4 md:rounded-2xl
       md:border md:border-gray-500/20 md:p-5"
    >
      <p
        className="text-2xl 
        font-extrabold mt-2 ml-5 
        border-b border-gray-500/20 
        pb-2"
      >
        Blogs
      </p>
      <Blogs data={formattedData} />
    </div>
  );
}
