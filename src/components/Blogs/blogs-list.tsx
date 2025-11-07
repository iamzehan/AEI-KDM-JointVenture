"use client";
import clsx from "clsx";
import Link from "next/link";

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
          <Link key={blog.id} href={`/blog/${blog.id}`}>
            <li
              className={clsx(
                ["p-4"],
                { ["bg-lime-200/20 dark:bg-transparent"]: blog.id % 2 === 0 },
                { ["bg-lime-600/20 dark:bg-zinc-500"]: blog.id % 2 > 0 }
              )}
            >
              <h2 className="font-bold text-blue-950 dark:text-white">
                {blog.title}
              </h2>
              <p></p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
