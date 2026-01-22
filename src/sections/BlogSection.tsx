import { useEffect, useState } from "react";
import client from "../client";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { format } from "date-fns";
import type { TypedObject } from "@portabletext/types";

const POSTS_QUERY = `*[_type == 'post' && defined(slug.current)]|order(publishedAt desc)[0...6]{_id, title, slug, publishedAt, image, body}`;

const builder = imageUrlBuilder({
  projectId: client.config().projectId || "a2kg71k7",
  dataset: client.config().dataset || "production",
});

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  image?: SanityImageSource;
  body?: TypedObject[];
}

interface Block {
  _type: string;
  children?: { text: string }[];
}

function getPlainTextFromPortableText(blocks?: TypedObject[], maxLength = 160): string {
  if (!blocks || !Array.isArray(blocks)) return "";
  let text = "";
  for (const block of blocks as Block[]) {
    if (typeof block === "object" && block._type === "block" && Array.isArray(block.children)) {
      text += block.children.map((child) => child.text).join("");
    }
    if (text.length > maxLength) break;
  }
  return text.length > maxLength ? text.slice(0, maxLength).trim() + "..." : text;
}

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    client.fetch(POSTS_QUERY).then(setPosts).catch(console.error);
  }, []);

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl xl:text-5xl font-bold mb-4 text-heading">Latest Articles</h2>
          <p className="text-lg text-muted-foreground">Insights, news, and stories from the Wyre team</p>
        </div>
        {posts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const imageUrl = post.image ? builder.image(post.image).width(600).height(300).fit('clip').url() : undefined;
              const description = getPlainTextFromPortableText(post.body, 160);
              return (
                <Card key={post._id} className="flex p-0 pb-4 flex-col h-full transition-shadow border-none">
                  {imageUrl && (
                    <a href={`/blogs/${post.slug.current}`} className="block">
                      <img
                        src={imageUrl}
                        alt={post.title}
                        className="rounded-t-xl object-cover w-full h-[200px] border-b border-gray-200 object-center"
                        width="600"
                        height="300"
                      />
                    </a>
                  )}
                  <CardHeader className="">
                    <CardTitle className="text-2xl font-semibold line-clamp-2 min-h-[2.5rem]">{post.title}</CardTitle>
                    <span className="text-sm text-muted-foreground">{format(new Date(post.publishedAt), "MMM d, yyyy")}</span>
                  </CardHeader>
                  <CardContent className="flex-">
                    <p className="text-base text-gray-700 line-clamp-2 min-h-[3rem]">{description}</p>
                  </CardContent>
                  <div className="px-6 pb-2 mt-auto">
                    <a
                      href={`/blogs/${post.slug.current}`}
                      className="inline-block text-brandColor font-semibold hover:underline mt-2"
                    >
                      Read more →
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles available yet.</p>
          </div>
        )}
        <div className="flex justify-center mt-12">
          <a
            href="/blogs"
            className="px-8 py-3 rounded-full bg-brandColor text-white font-semibold shadow hover:opacity-90 transition"
          >
            View all articles
          </a>
        </div>
      </div>
    </section>
  );
} 