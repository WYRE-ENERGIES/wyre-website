import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../client";
import { format } from "date-fns";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  Search,
  Calendar,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Globe,
  Clock
} from "lucide-react";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { TypedObject } from "@portabletext/types";
import { motion } from "framer-motion";
import OtherNavbar from "../components/navbar/OtherNavbar";
import Footer from "../sections/Footer";
import { AnimatedGridPattern } from "../components/magicui/animated-grid-pattern";
import { cn } from '../lib/utils';

const POSTS_QUERY = `*[_type == 'post' && defined(slug.current)]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image, body}`;

const builder = imageUrlBuilder({
  projectId: client.config().projectId || "9bnraqna",
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

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    client.fetch(POSTS_QUERY).then(setPosts).catch(console.error);
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getPlainTextFromPortableText(post.body, 1000).toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  }, [posts, searchTerm]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F9FC] to-white">
      <OtherNavbar />

      {/* Header */}
      <div className="bg-white pt-6 border-b border-gray-200">
        <div className="container mx-auto px-6 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-heading">
              News & Publications
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, news, and stories from the Wyre team about energy management, sustainability, and innovation.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-brandColor/10 rounded-full mx-auto mb-3">
                <BookOpen className="h-6 w-6 text-brandColor" />
              </div>
              <div className="text-2xl font-bold text-heading">{posts.length}</div>
              <div className="text-sm text-muted-foreground">Articles</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-brandColor/10 rounded-full mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-brandColor" />
              </div>
              <div className="text-2xl font-bold text-heading">Weekly</div>
              <div className="text-sm text-muted-foreground">Updates</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-brandColor/10 rounded-full mx-auto mb-3">
                <Globe className="h-6 w-6 text-brandColor" />
              </div>
              <div className="text-2xl font-bold text-heading">Global</div>
              <div className="text-sm text-muted-foreground">Reach</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-brandColor/10 rounded-full mx-auto mb-3">
                <Clock className="h-6 w-6 text-brandColor" />
              </div>
              <div className="text-2xl font-bold text-heading">5 min</div>
              <div className="text-sm text-muted-foreground">Avg. Read</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row mt-12 gap-4 mb-8"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="container mx-auto px-6 py-8">

        {/* Results count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-muted-foreground">
            Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16"
        >
          {filteredPosts.map((post) => {
            const imageUrl = post.image ? builder.image(post.image).width(600).height(300).fit('clip').url() : undefined;
            const description = getPlainTextFromPortableText(post.body, 160);
            return (
              <motion.div
                key={post._id}
                variants={cardVariants}
                className="group"
              >
                <Card className="p-0 flex flex-col h-full border-none shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                  {imageUrl && (
                    <div className="relative overflow-hidden rounded-t-xl">
                      <img
                        src={imageUrl}
                        alt={post.title}
                        className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                        width="600"
                        height="300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800">
                          Article
                        </Badge>
                      </div>
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{format(new Date(post.publishedAt), "MMM d, yyyy")}</span>
                    </div>
                    <CardTitle className="text-xl font-semibold line-clamp-2 min-h-[2.5rem] text-heading">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {description}
                    </p>
                  </CardContent>
                  <div className="px-6 pb-6 mt-auto">
                    <Link
                      to={`/blogs/${post.slug.current}`}
                      className="inline-flex items-center text-brandColor font-semibold hover:text-brandColor/80 transition-colors group/link"
                    >
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative pb-24 my-12 lg:pb-32 flex h-[500px] container mx-auto w-full items-center justify-center overflow-hidden rounded-lg lg:rounded-xl border-border border bg-background p-20"
        >
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
            )}
          />
          <div className="text-center">
            <span data-aos="fade-up"
              data-aos-delay="50" className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-purple-900 to-gray-300 bg-clip-text text-center text-4xl md:text-6xl xl:text-7xl font-semibold leading-none text-transparent ">
              Stay Updated with Wyre
            </span>
            <p data-aos="fade-up"
              data-aos-delay="100" className="mt-4 text-gray-500">
              Get the latest insights on energy management and sustainability delivered to your inbox.
            </p>

            <div data-aos="fade-up"
              data-aos-delay="150" className="mt-12 flex flex-wrap justify-center gap-4">
              <Button
                className="z-10 bg-brandColor hover:bg-brandColor hover:opacity-80"
                asChild
                size="lg">
                <a href="/">
                  <span>Subscribe to Newsletter</span>
                </a>
              </Button>

              <Button
                className="z-10 border border-border"
                asChild
                size="lg"
                variant="secondary">
                <a href="/">
                  <span>Follow Us</span>
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}