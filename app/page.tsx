// ./src/pages/index.tsx

import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Posts from "@/components/Posts";
import Hero from "@/components/Hero";
// async function fetchPosts(draftMode: boolean) {
//   const posts = await client.fetch(POSTS_QUERY);
//   return posts;
// }

export default async function Home() {
  return (
    <main className="w-full px-4">
      <Hero />
      <Hero />
      <Hero />
      <Hero />
    </main>
  );
}
