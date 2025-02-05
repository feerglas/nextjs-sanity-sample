import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "title",
      description: "Titel der News Startseite",
      title: "Titel",
      type: "localeString",
    }),
    defineField({
      name: "description",
      description: "Subtitel der News Startseite",
      title: "Subtitle",
      type: "localeString",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Settings",
      };
    },
  },
});
