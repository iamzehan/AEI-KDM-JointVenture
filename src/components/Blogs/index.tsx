import BlogList from "./blogs-list"

interface Blog {
  id: number;
  title: string;
  content: string[]; // content is always an array of strings
  subsections: Blog[]; // match your JSON field name
}
interface Data extends Blog{
    data: Blog[];
}
export default function Blogs({data}:{data:Data}){
    const title = data.title;
    const blogs = data.subsections;
    return (
        <div className="
        h-full w-full md:w-2/3 
        border-gray-200/20 shadow-lg shadow-black/50 md:rounded-xl
        self-center
        shadow-sm flex flex-col">
            <BlogList title={title} blogs={blogs}/>
        </div>
    )
}