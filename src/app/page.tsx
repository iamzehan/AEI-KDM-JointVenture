import Header from "@/components/home/Header/header";
import Description from "@/components/home/description";
import { tiroBangla } from "@/lib/fonts";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 dark:bg-black">
      {/* Header Images go here */}
      <Header font={tiroBangla}/>
      {/* Header Images end */}

      {/* Description go here */}
      <Description font={tiroBangla}/>
      {/* Description end */}
    </div>
  );
}
