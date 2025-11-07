"use client";
import Blogs from "@/components/Blogs";
import { useEffect, useState, Suspense } from "react";
export default function Page() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("api/blogs");
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);
  if (!data) {
    return <div className="w-full h-screen flex justify-center items-center">Fetching...</div>;
  } else {
    return (
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-extrabold">Blogs</p>
        <Blogs data={data} />
      </div>
    );
  }
}
