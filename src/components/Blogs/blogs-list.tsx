"use client";
import clsx from "clsx";
import Link from "next/link";
import { DoubleArrow } from "@mui/icons-material";
interface Blog {
  id: number;
  title: string;
  content: string[];
}

export default function BlogList({
  title,
  blogs,
}: {
  title: string;
  blogs: Blog[];
}) {
  const items: number = blogs.length;
  return (
    <div>
      <div className="
      flex flex-col items-center md:items-start gap-3 
      pb-4 border-b border-gray-500/20
      text-2xl md:text-3xl text-center md:text-left text-blue-950 dark:text-white 
      font-bold mx-5 my-10">
        {title}
        <span
          className="
          text-sm dark:text-white dark:bg-red-500/50
          bg-blue-500/30 w-fit p-2 rounded-full"
        >
          Total blogs: {items}
        </span>
      </div>

      <ul className="flex flex-col w-full">
        {blogs.map((blog, idx) => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.id}`}
            className="font-bold text-blue-950 dark:text-white bg-white visited:bg-zinc-100 dark:bg-transparent border-b border-gray-500/20 visited:bg-[--background] visited:text-blue-500 dark:text-shadow-sm"
          >
            <li
              className={clsx(
                ["p-4 py-10 md:px-10 bg-transparent"],
                // { ["bg-[--primary] dark:bg-zinc-950"]: blog.id % 2 === 0 },
                // { ["bg-blue-500/10"]: blog.id % 2 > 0 }
              )}
            >
              <div>
                <h2 className="ml-2 flex gap-2 items-start">
                  <DoubleArrow className="animate-lr" />
                  {idx + 1}. {blog.title}
                </h2>
                <p className="ml-10 text-xs text-gray-500 dark:text-gray-200/50 tuncate">
                  {blog.content[0]}
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
