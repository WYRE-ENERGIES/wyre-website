import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { TypedObject } from "@portabletext/types";
import { format } from "date-fns";
import { PortableTextRenderer } from "../components/renderer";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const builder = imageUrlBuilder({
  projectId: client.config().projectId || "9bnraqna",
  dataset: client.config().dataset || "production",
});

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  body: TypedObject[];
  image?: SanityImageSource;
}

export default function SingleBlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (!slug) return;
    client.fetch(POST_QUERY, { slug }).then(setPost).catch(console.error);
  }, [slug]);

  if (!post) return <div className="min-h-screen flex items-center justify-center text-lg">Loading...</div>;

  const postImageUrl = post.image
    ? builder.image(post.image).width(900).height(400).fit('clip').url()
    : null;

  const formattedDate = format(new Date(post.publishedAt), "EEEE do, yyyy.");

  return (
    <section className="min-h-screen bg-[#F6F9FC] py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <Link to="/blogs" className="inline-block mb-8 text-brandColor hover:underline font-medium">
          ← Back to posts
        </Link>
        <div className="w-full h-full">
          {postImageUrl && (
            <img
              src={postImageUrl}
              alt={post.title}
              className="w-full h-full rounded-lg"
            />
          )}
          <div className="pb-0">
            <h3 className="text-4xl font-bold leading-tight mb-2 mt-6">{post.title}</h3>
            <div className="flex items-center gap-2 text-muted-foreground text-base mb-4">
              <span>{formattedDate}</span>
            </div>
          </div>
          <article className="prose prose-lg max-w-none text-gray-900">
            {post.body && <PortableTextRenderer blocks={post.body} />}
          </article>
        </div>
      </div>
    </section>
  );
}