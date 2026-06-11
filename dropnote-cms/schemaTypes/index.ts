import { homePageType } from "./homePage";
import { siteSettingsType } from "./siteSettings";
import { authorType } from "./author";
import { blockContentType } from "./blockContent";
import { categoryType } from "./category";
import { postType } from "./post";

// We merge your existing schemas with the new blog schemas
export const schemaTypes = [
  homePageType,
  siteSettingsType,
  authorType,
  blockContentType,
  categoryType,
  postType
];