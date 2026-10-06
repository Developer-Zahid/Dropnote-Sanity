import { sanityClient } from "sanity:client";
import {createImageUrlBuilder, type SanityImageSource} from "@sanity/image-url";

// Create the image URL builder instance
export const imageBuilder = createImageUrlBuilder(sanityClient);

// Helper function to build responsive hot-spotted image CDN URLs
export function urlForImage(source: SanityImageSource) {
  return imageBuilder.image(source);
}

// Read the original pixel size from an image's asset reference
// (format: "image-<id>-<width>x<height>-<ext>"), without an extra query.
export function getImageDimensions(image: { asset?: { _ref?: string; _id?: string } } | undefined) {
  const ref = image?.asset?._ref ?? image?.asset?._id;
  const match = ref?.match(/-(\d+)x(\d+)-[a-z0-9]+$/);
  if (!match) return undefined;
  return { width: Number(match[1]), height: Number(match[2]) };
}
