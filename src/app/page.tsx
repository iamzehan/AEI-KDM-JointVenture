import Header from "@/components/Home/Header/header";
import Description from "@/components/Home/description";
import { tiroBangla } from "@/lib/fonts";
import Cards from "@/components/Home/Cards";
import Benefits from "@/components/Home/benefits";
import Footer from "@/components/Home/Footer";
export default function Page() {
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
