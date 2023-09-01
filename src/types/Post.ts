export type PostImage = { url: string; alt: string };

export type PostFrontmatter = {
  title: string;
  pubDate: string;
  description: string;
  author: string;
  image: PostImage;
  tags: string[];
};

export type Post = {
  post: {
    url: string;
    frontmatter: PostFrontmatter;
  };
};
