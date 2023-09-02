import type { MarkdownInstance } from "astro";

export type PostImage = { url: string; alt: string };

export type PostFrontmatter = {
  title: string;
  pubDate: string;
  description: string;
  author: string;
  image: PostImage;
  tags: string[];
};

export type Blog = {
  frontmatter: PostFrontmatter;
} & MarkdownInstance<Record<string, any>>;

export type Post = {
  post: Blog;
};
