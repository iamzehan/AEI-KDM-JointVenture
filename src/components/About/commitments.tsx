"use client";
import * as icon from "@mui/icons-material";

const icons:{[index:string]:icon.SvgIconComponent} = {
  "Security": icon.Security,
  "Affordability": icon.Money,
  "Sustainability": icon.EnergySavingsLeaf,
  "Partnership": icon.Handshake,
};
interface Content {
  title: string;
  description: string;
}

const commitments: { data: Content[] } = {
  data: [
    {
      title: "Security",
      description: "Strategic reserves and stable supply",
    },
    {
      title: "Affordability",
      description: "Lower import & logistics costs",
    },
    {
      title: "Sustainability",
      description: "Cleaner energy & efficient operations",
    },
    {
      title: "Partnership",
      description: "Local bottlers & public-private coordination",
    },
  ],
};

export default function Commitments() {
  const data = commitments.data;

  return (
    <div
      className="
    flex flex-col gap-5
    px-10 py-15 w-full 
    border-1 md:rounded-b-4xl border-gray-500/10 dark:border-x-0 dark:rounded-none
    shadow-sm shadow-gray-500/10 dark:shadow-none
    bg-white dark:bg-transparent
    "
    >
      <p className="text-2xl text-blue-950 dark:text-white font-bold ">
        Core Commitments
      </p>
      <div className="flex flex-wrap gap-3 md:flex-row md:flex-nowrap">
        {/* Iterate through this */}
        {data.map((commitment, idx) => {
            const Icon = icons[commitment.title];
          return (
            <div key={idx} className="
            w-full p-5 md:w-1/4
            flex flex-col content-center items-center text-center
            rounded-lg border-t border-gray-500/10 shadow-md/10 dark:shadow-green-500">
              <span className="flex flex-col content-center items-center p-3 rounded-full h-auto w-auto">
                <Icon fontSize="large" className="text-green-500"/>
              </span>
              <p className="text-blue-950 dark:text-white md:text-xl font-bold">{commitment.title}</p>
              <p className="text-sm text-gray-500 dark:text-white">{commitment.description}</p>
            </div>
          );
        })}
        {/* iteration ends */}
      </div>
    </div>
  );
}
