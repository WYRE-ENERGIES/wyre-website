import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { TypedObject } from "@portabletext/types";
import { format } from "date-fns";
import { PortableTextRenderer } from "../components/renderer";
import OtherNavbar from "../components/navbar/OtherNavbar";
import Footer from "../sections/Footer";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const builder = imageUrlBuilder({
  projectId: client.config().projectId || "a2kg71k7",
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
    ? builder.image(post.image).width(1200).fit('max').url()
    : null;

  const formattedDate = format(new Date(post.publishedAt), "EEEE do, MMMM yyyy");

  return (
    <div className="min-h-screen bg-background">
      <OtherNavbar />
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <Link to="/blogs" className="inline-block mb-8 text-brandColor hover:underline font-medium">
            ← Back to posts
          </Link>
          <div className="w-full h-full">
            <div className="relative w-full h-full flex max-md:flex-col mb-6 lg:mb-12 gap-6 lg:gap-12 items-start justify-center">
              {postImageUrl && (
                <img
                  src={postImageUrl}
                  alt={post.title}
                  className="w-full h-full border-2 border-gray-200 max-h-[500px] object-cover object-center rounded-lg"
                />
              )}
              <div className="pb-0">
                <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mt-2 mb-8">{post.title}</h3>
                <div className="flex items-center gap-2 text-brandColor font-bold md:text-lg mb-4">
                  <span>{formattedDate}</span>
                </div>
              </div>
            </div>
            <article className="prose prose-lg max-w-none text-gray-900">
              {post.body && <PortableTextRenderer blocks={post.body} />}
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}