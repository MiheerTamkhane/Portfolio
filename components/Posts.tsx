"use client";

import { SanityDocument } from "next-sanity";
import Link from "next/link";
import PortableText from "react-portable-text";
import { ChildLinkProps } from "sanity/structure";

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  console.log({ posts });
  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      {posts?.length > 0 ? (
        posts.map((post) => (
          <>
            <Link key={post._id} href={post.slug.current}>
              <h2 className="p-4 hover:bg-blue-50">{post.title}</h2>
            </Link>
            <PortableText
              // Pass in block content straight from Sanity.io
              content={post.body}
              // Optionally override marks, decorators, blocks, etc. in a flat
              // structure without doing any gymnastics
              serializers={{
                h1: (props: React.PropsWithChildren) => (
                  <h1 className="text-2xl" {...props} />
                ),
                li: ({ children }: ChildLinkProps) => (
                  <li className="special-list-item">{children}</li>
                ),
              }}
            />
          </>
        ))
      ) : (
        <div className="p-4 text-red-500">No posts found</div>
      )}
    </main>
  );
}
