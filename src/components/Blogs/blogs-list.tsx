"use client";
import clsx from "clsx";
import Link from "next/link";
import { DoubleArrow } from "@mui/icons-material";
interface Blog {
  id: number;
  title: string;
}

export default function BlogList({title, blogs}:{title:string, blogs:Blog[]}) {
  return (
    <div>
      <div className="text-2xl md:text-3xl text-blue-950 dark:text-white font-bold m-10">
        {title}
      </div>

      <ul className="flex flex-col w-full">
        {blogs.map((blog) => (
          <Link key={blog.id} scroll={true} href={`/blogs/${blog.id}`} className="font-bold text-blue-950 dark:text-white visited:text-green-400">
            <li
              className={clsx(
                ["p-4 py-10 md:px-10"],
                { ["bg-lime-200/20 dark:bg-zinc-950"]: blog.id % 2 === 0 },
                { ["bg-lime-600/20 dark:bg-zinc-500"]: blog.id % 2 > 0 }
              )}
            >

              <h2>
                <DoubleArrow className="mb-1 mr-2 animate-lr"/> {blog.title}
              </h2>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
