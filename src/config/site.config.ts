import type { Site } from "@/types";

export const siteConfig: Site = {
  name: "jagadeshronanki.com",
  title: "Jagadesh Ronanki | Status ∙ Wealth ∙ Awareness ∙ Greed",
  description:
    "Welcome to my little corner of the internet, where I’m here to talk and mock you all. Just a nobody trying to make sense of it all — join me if you dare.",
  keywords: [
    "Jagadesh Ronanki",
    "Jagadesh R",
    "JrNet",
    "JR",
    "jagadeshronanki.com",
    "jagadeshronanki.in",
    "github.com/jagadesh-ronanki",
    "programmer",
    "developer",
    "engineer",
    "founder",
    "security researcher",
    "Warden Code4rena",
    "Mastadon Hack",
    "bug bounty",
    "x.com/jagadeshronanki",
    "solidity",
    "hacking",
    "cyber security",
    "computer science",
    "cybersecurity courses",
    "satire",
    "self-awareness",
    "greed",
    "wealth",
    "life lessons",
    "social commentary",
    "technology",
    "software development",
    "life advice",
    "critical thinking",
    "personal growth",
    "internet culture",
    "digital security",
    "programming tutorials",
    "ethical hacking",
    "vulnerability research",
    "online satire",
    "coding",
    "tech blog",
  ],
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://jagadeshronanki.vercel.app",
  creator: {
    name: "Jagadesh Ronanki",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://jagadeshronanki.vercel.app",
  },
  ogImage: (process.env.NEXT_PUBLIC_SITE_URL || "https://jagadeshronanki.vercel.app") + "/og.png",
  links: {
    x: "https://x.com/jagadeshronanki",
    github: "https://github.com/jagadesh-ronanki",
  },
};
