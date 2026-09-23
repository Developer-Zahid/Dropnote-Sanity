import { defineField, defineType } from "sanity";
import { TagIcon } from '@sanity/icons/Tag'

export const categoryType = defineType({
  name: "category",
  title: "Categories",
  icon: TagIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});