import Link from "./Link.astro";
import TextMark from "./TextMark.astro";

// Mark components shared by the post body and nested rich text (callouts).
// Kept separate from the block-type map to avoid a circular import through Callout.
export const markComponents = {
  link: Link,
  internalLink: Link,
  highlight: TextMark,
  sup: TextMark,
  sub: TextMark,
};
