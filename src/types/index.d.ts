export type Site = {
  name: string;
  title: string;
  description: string;
  keywords: string[];
  siteUrl: string;
  creator: {
    name: string;
    url: string;
  }
  ogImage: string;
  links: {
    x: string;
    github: string;
  }
}

export type Portfolio = {
  name: string;
  tagline: string;
  bio: string;
  links: {
    x: string;
    github: string;
    linkedin: string;
    mail: string;
    discord: string;
    youtube: string;
    facebook: string;
    instagram: string;
  }
}