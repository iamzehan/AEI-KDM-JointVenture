import Header from "@/components/home/Header/header";
import Description from "@/components/home/description";
import { tiroBangla } from "@/lib/fonts";
import Cards from "@/components/home/Cards";
import Benefits from "@/components/home/benefits";
import Footer from "@/components/home/Footer";
export default function Home() {
  return (
    <div className="flex flex-col dark:bg-black">
      {/* Header Images go here */}
      <Header font={tiroBangla} />
      {/* Header Images end */}
      <div className="flex flex-col md:py-10 md:px-5">
        {/* Description go here */}
        <Description font={tiroBangla} />
        {/* Description end */}

        {/* Cards go here */}
        <Cards />
        {/* Cards end */}

        {/* Benefits go here */}
        <Benefits />
        {/* Benefits end */}

        {/* footer goes here */}
        <Footer />
        {/* footer end */}
      </div>
    </div>
  );
}
