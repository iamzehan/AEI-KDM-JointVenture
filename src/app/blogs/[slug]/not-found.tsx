export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] gap-4">
      <h2 className="text-2xl font-bold">404 - Blog Post Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400">The blog post you are looking for does not exist.</p>
    </div>
  );
}