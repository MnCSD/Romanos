import SanityClient from "@sanity/client";

const client = SanityClient({
  projectId: "5vtozspk",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
  token:
    "skgPpFvJJ4JXXpqSWa5C0or7Ob7YZ5cBW9Raf4p5vMxtaskFUpGwSwp54a7BKgARM58wBBIaocj6GiKxmAOgMEp2h0gFBIbfx9lYiaNEvWyHabBA9LayrSVVHHfP9sSIujIl8G2aYvG6cVRUTHFwqjmxwpRMIvvCJr03YSYw2Nzpxq8ENiNo",
});

export default client;
