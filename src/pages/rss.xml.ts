import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: any) {
const posts = await getCollection('posts')

  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: context.site,
    items: posts.map(({data: {title, pubDate, description}, slug}) => ({
      title,
      pubDate,
      description,
      link: slug
    })),
    customData: `<language>en-us</language>`,
  });
}
