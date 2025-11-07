"use client";
import Blogs from "@/components/Blogs";
import { getAllBlogs } from "@/lib/blogs/route";
import { RotateRight } from "@mui/icons-material";
import { useEffect, useState, Suspense } from "react";
export default function Page() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      // const response = await fetch("/src/lib/api/blogs");
      // const jsonData = await response.json();
      const jsonData = await getAllBlogs();
      setData(jsonData);
    }
    fetchData();
  }, []);
  if (!data) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        Fetching... <RotateRight className="mr-3 size-5 motion-safe:animate-spin animate-ping"/>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-extrabold">Blogs</p>
        <Blogs data={data} />
      </div>
    );
  }
}
