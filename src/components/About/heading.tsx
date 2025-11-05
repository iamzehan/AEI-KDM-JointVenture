"use client";

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
  return (
    <div
      className="flex flex-col gap-3 
    p-10 
    border-1 border-gray-500/10
    md:shadow-sm/10 
    md:rounded-lg text-justify"
    >
      <p className="text-blue-950 dark:text-white font-bold text-xl md:text-2xl">
        {data.title}
      </p>
      <p className="text-gray-500 dark:text-white">{data.description}</p>
      <p className="text-xl font-bold text-blue-950 dark:text-white">Why choose us?</p>
      <ul className="list-disc px-10">{data.list_of_why.map((item, idx)=>{
        return (
          <li key={idx}>
            <strong className="text-blue-950 dark:text-gray-500">{item.title}: </strong> 
            <text className="text-gray-500 dark:text-white">{item.description}</text>
          </li>
        );
      }
      )}</ul>
    </div>
  );
}
