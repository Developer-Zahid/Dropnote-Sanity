import { homePageType } from "./homePage";
import { siteSettingsType } from "./siteSettings";
import { authorType } from "./author";
import { blockContentType } from "./blockContent";
import { categoryType } from "./category";
import { postType } from "./post";
import { buttonType } from "./blocks/button";
import { calloutType } from "./blocks/callout";
import { ctaBlockType } from "./blocks/ctaBlock";
import { dataTableType } from "./blocks/dataTable";
import { dividerType } from "./blocks/divider";
import { galleryType } from "./blocks/gallery";
import { htmlEmbedType } from "./blocks/htmlEmbed";
import { relatedPostsType } from "./blocks/relatedPosts";
import { videoEmbedType } from "./blocks/videoEmbed";

// We merge your existing schemas with the new blog schemas
export const schemaTypes = [
  siteSettingsType,
  homePageType,
  authorType,
  blockContentType,
  categoryType,
  postType,
  // Rich text body blocks
  buttonType,
  calloutType,
  ctaBlockType,
  dataTableType,
  dividerType,
  galleryType,
  htmlEmbedType,
  relatedPostsType,
  videoEmbedType,
];
