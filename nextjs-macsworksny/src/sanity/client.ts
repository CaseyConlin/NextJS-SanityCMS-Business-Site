import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "sa41a56a",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
