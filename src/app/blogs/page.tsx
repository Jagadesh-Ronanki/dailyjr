import { blogs } from "#site/content";
import BlogCard from "@/components/blog/blog-card";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function BlogSection() {
  return (
    <main className="relative w-full lg:h-screen p-0 sm:p-5">
      <div className="w-full h-full rounded-2xl lg:border flex flex-wrap justify-between lg:divide-x">
        <div className="hidden lg:block w-full lg:w-2/5 p-2 md:p-8">
          <Hero />
        </div>
        <div
          id="tab-section"
          className="relative w-full max-w-4xl mx-auto lg:h-full lg:w-3/5 p-2 md:p-8 lg:overflow-y-scroll"
        >
          <Navbar />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
            {blogs.map((blog) => (
              <BlogCard key={blog.title} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}