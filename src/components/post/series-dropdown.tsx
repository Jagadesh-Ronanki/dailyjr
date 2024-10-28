"use client";

import { posts as allPosts } from "#site/content";
import { PostSeries } from "./post-series"; 

// Type guard to check if the series object is valid
function isSeries(series: any): series is { title: string; posts: Array<{ slug: string; title: string; status: string; isCurrent?: boolean }> } {
  return series && typeof series.title === 'string' && Array.isArray(series.posts);
}

export default function SeriesDropdown({
  title,
  isInteractive,
  currentSlug,
}: {
  title: string | undefined;
  isInteractive: boolean;
  currentSlug?: string;
}) {
  // Group posts by series title
  const seriesList = allPosts.reduce((acc: any, post: any) => {
    if (post.series) {
      const seriesTitle = post.series.title;

      // Initialize series entry if it doesn't exist
      if (!acc[seriesTitle]) {
        acc[seriesTitle] = {
          title: seriesTitle,
          posts: [],
        };
      }

      // Push post details into the corresponding series
      acc[seriesTitle].posts.push({
        slug: post.slug,
        title: post.title,
        status: post.status,
        isCurrent: post.slug === "posts/" + currentSlug,
      });
    }
    return acc;
  }, {} as Record<string, { title: string; posts: Array<{ slug: string; title: string; status: string; isCurrent: boolean }> }>);

  // Filter out invalid series entries
  const validSeriesList = Object.values(seriesList).filter(isSeries);

  // Filter by specific series title if provided
  const filteredSeriesList = title ? validSeriesList.filter(series => series.title === title) : validSeriesList;

  return (
    <>
      {filteredSeriesList.map((seriesData) => (
        <PostSeries key={seriesData.title} seriesData={seriesData} isInteractive={isInteractive} />
      ))}
    </>
  );
}
