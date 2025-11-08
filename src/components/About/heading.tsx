"use client";
import * as icon from '@mui/icons-material'
interface Content {
  title: string;
  description: string;
  list_of_why: {
    title: string;
    description: string;
  }[];
}

const heading: { data: Content } = {
  data: {
    title: "About AEI + KDM JV",
    description:
      "We’ve already secured 150 acres of prime Moheshkhali land to develop the nation’s first deep-sea LPG terminal — demonstrating our commitment to stable, affordable energy across Bangladesh.",
    list_of_why: [
      {
        title: "Experience You Can Trust",
        description: "Global leaders in energy infrastructure.",
      },
      {
        title: "Local Focus, Global Expertise",
        description: "Solutions tailored for Bangladesh.",
      },
      {
        title: "Committed to YOU",
        description: " Reliable and affordable LPG for all.",
      },
    ],
  },
};
export default function Heading() {
  const data: Content = heading.data;
  const AboutIcon = icon.Business;
  return (
    <div
      className="
    w-full
    bg-white dark:bg-transparent
    flex flex-col gap-3
    p-10 
    xl:border-1 border-gray-500/10 dark:border-r-0 dark:border-l-0
    xl:shadow-sm/10 xl:rounded-t-4xl
    dark:rounded-none text-justify"
    >
      <span className='text-white self-center rounded-full p-3 bg-red-400'>
        <AboutIcon fontSize="large" className='drop-shadow-sm/50'/>
      </span>
      <p className="text-center text-blue-950 dark:text-white font-extrabold text-2xl md:text-3xl">
        {data.title}
      </p>
      <p className="text-gray-500 dark:text-white">{data.description}</p>
      <p className="text-xl font-bold text-blue-950 dark:text-white">
        Why choose us?
      </p>
      <ul className="list-disc px-5 md:px-10 text-sm md:text-sm">
        {data.list_of_why.map((item, idx) => {
          return (
            <li key={idx}>
              <strong className="text-blue-950 dark:text-gray-500">
                {item.title}:{"\t"}
              </strong>
              <span className="text-gray-500 dark:text-white">
                {item.description}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
