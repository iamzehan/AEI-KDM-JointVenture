import { getBlogById } from "@/lib/blogs/route";
import { RotateRight } from "@mui/icons-material";

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  await new Promise(resolve => setTimeout(resolve, 1000));
  const data = await getBlogById(slug);
  return (
    <div className="flex flex-col gap-4">
      <p className="text-2xl font-extrabold">{data.title}</p>
    </div>
  );
}
