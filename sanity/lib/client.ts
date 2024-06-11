import { createClient } from "next-sanity";

import { apiVersion, dataset, token, projectId, useCdn } from "../env";
console.log({ dataset, projectId });
export const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion,
  useCdn,
  perspective: "published",
});
