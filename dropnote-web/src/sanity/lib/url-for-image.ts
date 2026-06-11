import { sanityClient } from "sanity:client";
import {createImageUrlBuilder, type SanityImageSource} from "@sanity/image-url";

// Create the image URL builder instance
export const imageBuilder = createImageUrlBuilder(sanityClient);

// Helper function to build responsive hot-spotted image CDN URLs
export function urlForImage(source: SanityImageSource) {
  return imageBuilder.image(source);
}