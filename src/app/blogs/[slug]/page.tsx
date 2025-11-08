import { getBlogById, type Blog } from "@/lib/blogs";
import * as MatarialIcon from "@mui/icons-material";
import Icon from "@/components/icons";
import clsx from "clsx";
import { notFound } from "next/navigation";

export default async function Blog({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const data: Blog | undefined = getBlogById(slug);
  if (!data) notFound();

  const blog = data as Blog;

  return (
    <div className="flex flex-col gap-5 w-fit self-center p-5">
      <p className="text-2xl font-extrabold">{blog.title}</p>

      <ul
        className={clsx(
          ["text-md text-gray-500 dark:text-white text-left p-5"],
          { ["list-disc"]: blog.content.length > 1 }
        )}
      >
        {blog.content.map((content, idx) => {
          if (content.includes(":")) {
            const [bold, normal] = content.split(":");
            return (
              <li key={idx}>
                <strong className="text-blue-950 dark:text-white">{bold}:</strong>
                <span>{normal}</span>
              </li>
            );
          }

          return <li key={idx}>{content}</li>;
        })}
      </ul>

      <ul className="flex flex-col w-full md:flex-row gap-2">
        {(blog.subsections ?? []).map((section, idx) => (
          <li
            key={idx}
            className="flex flex-col justify-between border border-gray-500/20 p-5 text-center items-center rounded-md md:rounded-lg "
          >
            <Icon
              name={(section.icon ?? "BrokenImageOutlined") as keyof typeof MatarialIcon}
              size="large"
              className={clsx([section.color], ["drop-shadow-sm"]) }
            />

            <p className="text-xl font-bold text-center text-blue-950 dark:text-white">
              {section.title}
            </p>

            <ul
              className={clsx(
                ["text-xs text-gray-500 dark:text-white text-left p-5"],
                { ["list-disc"]: (section.content ?? []).length > 1 }
              )}
            >
              {(section.content ?? []).map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
