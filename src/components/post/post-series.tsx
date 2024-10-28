"use client";

import { FOCUS_VISIBLE_OUTLINE, LINK_STYLES } from "@/lib/constants";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

// Title component for displaying series titles
const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="text-xs uppercase text-[#eef2ff]/80">Series</div>
      <div className="text-lg font-medium text-[#eef2ff]/80">{children}</div>
    </div>
  );
};

// PostSeries component
export const PostSeries = ({
  seriesData,
  isInteractive = false,
}: {
  seriesData: {
    title: string;
    posts: Array<{
      slug: string;
      title: string;
      status: string;
      isCurrent?: boolean; // Optional to indicate if it's the current post
    }>;
  };
  isInteractive?: boolean;
}) => {
  const [isOpen, setIsOpen] = React.useState(!isInteractive);
  const currentIndex = seriesData.posts.findIndex((post) => post.isCurrent) + 1;

  return (
    <div className={`text-[#eef2ff] head-text-sm rounded-2xl bg-black/80 border-[0.3px] text-xs p-5 shadow-surface-elevation-low lg:px-6 mb-8 transition-all ${!isInteractive ? 'mt-8' : ''}`}>
      {isInteractive ? (
        <button
          className="group flex w-full items-center text-left"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Title>
            {seriesData.title}
            <span className="font-normal text-[#eef2ff]/40">
              {" "}
              &middot; {currentIndex} of {seriesData.posts.length}
            </span>
          </Title>

          <div className="ml-auto pl-4">
            <div className="rounded-full text-[#eef2ff]/80 p-2">
              {isOpen ? (
                <ChevronUpIcon className="w-5" />
              ) : (
                <ChevronDownIcon className="w-5" />
              )}
            </div>
          </div>
        </button>
      ) : (
        <Title>{seriesData.title}</Title>
      )}

      <div className={clsx({ hidden: !isOpen, block: isOpen })}>
        <hr className="my-5 border-[0.1px] border-[#eef2ff]/10" />

        <ul className="text-base">
          {seriesData.posts.map((p) => (
            <li key={p.slug} className={clsx(
              "relative my-3 pl-7 before:absolute before:left-1 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full",
              {
                "before:bg-rose-300/90 before:ring-[3px] before:ring-purple-400/20 before:ring-offset-1 before:ring-offset-black/10":
                  p.isCurrent,
                "before:bg-rose-200/30":
                  p.status === "published" && !p.isCurrent,
                "before:bg-rose-200/10": p.status !== "published",
              },
            )}>
              {p.status === "published" ? (
                p.isCurrent ? (
                  <span className="text-[#eef2ff]/90">{p.title}</span>
                ) : (
                  <Link href={`/${p.slug}`} className={clsx(LINK_STYLES, FOCUS_VISIBLE_OUTLINE)}>
                    {p.title}
                  </Link>
                )
              ) : (
                <span className="text-[#eef2ff]/50">{p.title}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};