import { posts } from "#site/content";
import BlogCard from "@/components/blog/blog-card";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PostCard from "@/components/post/post-card";

export default function PostSection() {
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return (
    <main className="relative w-full lg:h-screen p-0 sm:p-5">
      <div className="w-full h-full rounded-2xl lg:border flex flex-wrap justify-between lg:divide-x">
        <div className="w-full lg:w-2/5 p-2 md:p-8 lg:h-full lg:overflow-y-scroll">
          <Hero />
        </div>
        <div
          id="tab-section"
          className="relative w-full max-w-4xl mx-auto lg:h-full lg:w-3/5 p-2 md:p-8 lg:overflow-y-scroll"
        >
          <Navbar />
          <div className="w-full space-y-6 mt-5">
            {sortedPosts.map((post) => (
              <PostCard post={post} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
