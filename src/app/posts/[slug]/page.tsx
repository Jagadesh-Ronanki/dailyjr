import { posts } from "#site/content";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Picture from "@/components/picture";
import { IconMap } from "@/components/icon-map";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import SeriesDropdown from "@/components/post/series-dropdown";

type PostPageProps = {
  params: {
    slug: string;
  };
};

function getPostFromParam(params: { slug: string }) {
  const slug = params.slug;
  const post = posts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }
  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = getPostFromParam(params);

  if (!post) {
    return {};
  }

  const ogUrl = new URL(`${siteConfig.siteUrl}${post.image.src}`);
  ogUrl.searchParams.set("heading", post.title);
  ogUrl.searchParams.set("type", "Blog Post");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: `${post.title} | ${siteConfig.name} | ${siteConfig.creator.name}`,
    description: post.description,
    keywords: [...post.tags.map((tag) => tag?.title!), ...siteConfig.keywords, post.title],
    openGraph: {
      title: `${post.title} | ${siteConfig.name} | ${siteConfig.creator.name}`,
      description: post.description,
      type: "article",
      url: `${siteConfig.siteUrl}/posts/${post.slugAsParams}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${siteConfig.name}`,
      description: post.description,
      images: [ogUrl.toString()],
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({
    slug: post.slugAsParams,
  }));
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostFromParam(params);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative w-full lg:h-screen p-0 sm:p-5">
      <div className="w-full h-full rounded-2xl sm:border flex flex-wrap justify-between lg:divide-x">
        <div className="relative w-full lg:w-2/5 p-2 md:p-8 lg:h-full lg:overflow-y-scroll">
          <div className="flex justify-between mb-2">
            <Link href="/" className="group/back text-xs">
              <ArrowLeft
                size={18}
                className="group-hover/back:-translate-x-1 transition-transform transform-gpu duration-100 ease-in-out"
              />
              <span className="sr-only">rdsx.dev</span>
            </Link>
            <p className="px-2 py-1 text-xs rounded bg-secondary">
              {new Date(post.publishedAt).toDateString()}
            </p>
          </div>
          <Picture
            image={post.image}
            imageDark={post.imageDark}
            width={600}
            height={400}
            alt={post.title}
            className="border rounded-xl mx-auto"
          />
          <h1 className="head-text-sm py-1 mt-6 mb-4">{post.title}</h1>
          <div className="mb-8">
            {/* <div className="flex flex-wrap items-center gap-2 mb-4">
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
            <div className="flex flex-wrap items-center gap-2">
            {post.tags && post.tags.map((tag) => (
              <p
                key={tag?.slug}
                className="text-xs p-1 rounded bg-secondary cursor-pointer"
              >
                {tag?.title}
              </p>
            ))}
            </div>
          </div>
          <SeriesDropdown title={post.series?.title} isInteractive={true} currentSlug={post.slugAsParams} />
          <p className="rounded mb-4">{post.description}</p>
        </div>
        <div
          id="tab-section"
          className="relative w-full lg:h-full lg:w-3/5 p-2 md:p-8 overflow-y-scroll"
        >
          <MDXContentRenderer code={post.body} />
        </div>
      </div>
    </main>
  );
}
