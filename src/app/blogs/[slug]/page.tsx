import { getBlogById } from "@/lib/blogs/route";
import * as MatarialIcon from "@mui/icons-material";
import Icon from "@/components/icons";
import clsx from "clsx";
interface Data {
  id: number;
  icon?: keyof typeof MatarialIcon;
  color?: string;
  title: string;
  content: string[];
  subsections: Data[];
}
export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data: Data = await getBlogById(slug);
  return (
    <div className="flex flex-col gap-5 w-fit self-center p-5">
      <p className="text-2xl font-extrabold">{data.title}</p>
      <ul
        className={clsx(
          ["text-md text-gray-500 dark:text-white text-left p-5"],
          { ["list-disc"]: data.content.length > 1 }
        )}
      >
        {data.content.map((content, idx) => {
          if (content.includes(":")) {
            const [bold, normal] = content.split(":");
            return(
              <li key={idx}>
                <strong className="text-blue-950 dark:text-white">{bold}:</strong><span>{normal}</span>
              </li>
            )
          } else {
            return <li key={idx}>{content}</li>;
          }
        })}
      </ul>
      <ul className="flex flex-col w-full md:flex-row gap-2">
        {data.subsections?.map((section, idx) => {
          return (
            <li
              key={idx}
              className="flex flex-col justify-between border border-gray-500/20 p-5 text-center items-center rounded-md md:rounded-lg "
            >
              <Icon
                name={section.icon ? section.icon : "BrokenImageOutlined"}
                size="large"
                className={clsx([section.color], ["drop-shadow-sm"])}
              />
              <p className="text-xl font-bold text-center text-blue-950 dark:text-white">
                {section.title}
              </p>
              <ul
                className={clsx(
                  ["text-xs text-gray-500 dark:text-white text-left p-5"],
                  { ["list-disc"]: section.content.length > 1 }
                )}
              >
                {section.content.map((content, idx) => (
                  <li key={idx}>{content}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
