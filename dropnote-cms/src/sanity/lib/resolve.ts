import { defineLocations } from "sanity/presentation";
import type { PresentationPluginOptions } from "sanity/presentation";

// Map our Sanity document models to their active frontend URLs 
export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    homePage: defineLocations({
      select: {
        title: "title",
      },
      resolve: () => ({
        locations: [
          {
            title: "Home Page",
            href: "/",
          },
        ],
      }),
    }),
    post: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Untitled Post",
            href: `/blog/${doc?.slug}`,
          },
          {
            title: "Blog Archive",
            href: "/blog",
          },
        ],
      }),
    }),
  },
};