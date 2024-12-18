import { posts } from "#velite";
import { StepForward } from "lucide-react";
import Link from "next/link";
import Picture from "@/components/picture";
import { z } from "velite";

type PostCardProps = {
  post: z.infer<typeof posts.schema>;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="flex p-3 justify-between gap-2 rounded-xl border overflow-hidden">
      <div className="space-y-2 w-full tablet:w-3/5">
        <Link href={`/posts/${post.slugAsParams}`} className="space-y-2 group/link">
          <div className="inline-flex items-center gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl font-semibold font-heading">{post.title}</h1>
              <span className="text-xs px-2 py-1 rounded bg-secondary">
                {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
            <span className="-translate-x-1 opacity-0 group-hover/link:translate-x-0 group-hover/link:opacity-100 transition-all duration-100 ease-in-out">
              <StepForward size={12} />
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl">
            {post.description}
          </p>
        </Link>
        <div className="flex items-center gap-2 flex-wrap">
          {Array.isArray(post.tags) && post.tags.map((tag) => (
            <p
              key={tag?.slug}
              className="px-2 py-1 rounded bg-muted text-xs cursor-pointer"
            >
              {tag?.title}
            </p>
          ))}
        </div>
        {/* <div className="flex flex-wrap items-center gap-2">
          {post.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              className="social-link"
            >
              {IconMap[link.name.toLowerCase() as keyof typeof IconMap]}
              <span className="sr-only">
                {`${link.name} - ${link.url}`}
              </span>
            </a>
          ))}
        </div> */}
      </div> 
      <div className="w-2/5 aspect-video overflow-hidden hover:border duration-100 transition-all transform-gpu ease-in-out rounded-xl hidden tablet:block">
        <Link href={`/posts/${post.slugAsParams}`}>
          <Picture
            image={post.image}
            imageDark={post.imageDark}
            width={250}
            height={100}
            quality={100}
            alt={post.title}
            className="w-full h-full object-cover scale-100 hover:scale-105 transition-all transform-gpu ease-in-out"
          />
        </Link>
      </div>
    </div>
  );
}
