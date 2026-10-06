import { defineType, defineArrayMember, defineField } from "sanity";
import { internalLinkAnnotation, linkAnnotation } from "./blocks/annotations";
import {
  HighlightDecorator,
  HighlightIcon,
  SubDecorator,
  SubIcon,
  SupDecorator,
  SupIcon,
} from "./blocks/decorators";

export const blockContentType = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Heading 1", value: "h1" },
        { title: "Heading 2", value: "h2" },
        { title: "Heading 3", value: "h3" },
        { title: "Heading 4", value: "h4" },
        { title: "Heading 5", value: "h5" },
        { title: "Heading 6", value: "h6" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
          { title: "Code", value: "code" },
          {
            title: "Highlight",
            value: "highlight",
            icon: HighlightIcon,
            component: HighlightDecorator,
          },
          { title: "Superscript", value: "sup", icon: SupIcon, component: SupDecorator },
          { title: "Subscript", value: "sub", icon: SubIcon, component: SubDecorator },
        ],
        annotations: [linkAnnotation, internalLinkAnnotation],
      },
    }),
    // ── Media
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative Text",
          validation: (Rule) => Rule.warning().required(),
        }),
        defineField({
          name: "caption",
          type: "string",
          title: "Caption",
        }),
        defineField({
          name: "size",
          type: "string",
          title: "Size",
          options: {
            list: [
              { title: "Normal (text width)", value: "normal" },
              { title: "Wide", value: "wide" },
              { title: "Full width", value: "full" },
            ],
            layout: "radio",
            direction: "horizontal",
          },
          initialValue: "normal",
        }),
      ],
    }),
    defineArrayMember({ type: "gallery" }),
    defineArrayMember({ type: "videoEmbed" }),
    // ── Content
    defineArrayMember({ type: "callout" }),
    defineArrayMember({ type: "button" }),
    defineArrayMember({ type: "ctaBlock" }),
    defineArrayMember({ type: "dataTable" }),
    defineArrayMember({ type: "divider" }),
    // ── Code & embeds
    defineArrayMember({
      type: "code",
      title: "Code block",
      options: { withFilename: true },
    }),
    defineArrayMember({ type: "htmlEmbed" }),
    // ── CMS data
    defineArrayMember({ type: "relatedPosts" }),
  ],
  options: {
    insertMenu: {
      filter: true,
      groups: [
        { name: "media", title: "Media", of: ["image", "gallery", "videoEmbed"] },
        {
          name: "content",
          title: "Content",
          of: ["callout", "button", "ctaBlock", "dataTable", "divider"],
        },
        { name: "code", title: "Code & embeds", of: ["code", "htmlEmbed"] },
        { name: "cms", title: "CMS data", of: ["relatedPosts"] },
      ],
    },
  },
});
