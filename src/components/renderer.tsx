"use client" // This component needs client-side interactivity for image rendering and general DOM manipulation.

import { PortableText, type PortableTextComponents } from "@portabletext/react"
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import type { TypedObject } from "@portabletext/types";

const builder = imageUrlBuilder({
  projectId: client.config().projectId || "9bnraqna",
  dataset: client.config().dataset || "production",
});

// Define custom components for Portable Text rendering
const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="my-8">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src={builder.image(value).width(800).url() || "/placeholder.svg"}
            alt={value.alt || "Blog image"}
            width={800}
            height={450}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      )
    },
    // You can add other custom types here if you have them in your Sanity schema
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-10 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-8 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mt-6 mb-2">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold mt-5 mb-2">{children}</h4>,
    normal: ({ children }) => <p className="text-lg leading-relaxed mb-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6 text-gray-700 dark:text-gray-300">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-8 mb-4 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-8 mb-4 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-lg">{children}</li>,
    number: ({ children }) => <li className="text-lg">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined
      return (
        <a href={value.href} rel={rel} className="text-brandColor hover:underline dark:brandColor/70">
          {children}
        </a>
      )
    },
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-green-700">
        {children}
      </code>
    ),
  },
}

interface PortableTextRendererProps {
  blocks: TypedObject[];
}

export function PortableTextRenderer({ blocks }: PortableTextRendererProps) {
  return <PortableText value={blocks} components={components} />
}
