"use client";
import Blogs from "@/components/Blogs";
import { getAllBlogs } from "@/lib/blogs";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

interface Data {
    id: number;
    title: string;
    content: never[];
    subsections: ({
        id: number;
        title: string;
        content: string[];
        subsections: never[];
    } | {
        id: number;
        title: string;
        content: never[];
        subsections: {
            id: number;
            title: string;
            icon: string;
            color: string;
            content: string[];
            subsections: never[];
        }[];
    })[];
  }
export default function Page() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      // const response = await fetch("/src/lib/api/blogs");
      // const jsonData = await response.json();
      // await new Promise((resolve)=> setTimeout(resolve, 300));
      const jsonData:Data=  getAllBlogs();
      setData(jsonData);
    }
    fetchData();
  }, []);
  if(!data){
    return <Loader/>;
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
      <Blogs data={data} />
    </div>
  );
}
