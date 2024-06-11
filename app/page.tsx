// ./src/pages/index.tsx

import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Posts from "@/components/Posts";

type PageProps = {
  posts: SanityDocument[];
  draftMode: boolean;
  token: string;
};

async function fetchPosts(draftMode: boolean) {
  const posts = await client.fetch(POSTS_QUERY);
  return posts;
}

export default async function Home() {
  const posts = await fetchPosts(false);
  return (
    <div>
      <h1>My Portfolio</h1>
      <Posts posts={posts} />
    </div>
  );
}

// export const getStaticProps = async ({ draftMode = false }) => {
//   // const client = getClient(draftMode ? token : undefined);
//   const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);

//   return {
//     props: {
//       posts,
//       draftMode,
//     },
//   };
// };
