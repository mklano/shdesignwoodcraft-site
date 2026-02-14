const { defineStackbitConfig } = require("@stackbit/types");
const { GitContentSource } = require("@stackbit/cms-git");

module.exports = defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  nodeVersion: "18",
  ssgName: "astro",
  contentSources: [
    new GitContentSource({
      rootPath: "./",
      contentDirs: ["src/content"],
      models: [
        // PAGES
        {
          name: "Home",
          type: "page",
          urlPath: "/",
          filePath: "src/content/pages/index.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "seoDescription", type: "string" },
            {
              name: "sections",
              type: "list",
              items: {
                type: "model",
                models: ["Hero", "Services", "Gallery", "Testimonials", "CTA"]
              }
            }
          ]
        },
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "src/content/pages/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "slug", type: "string", required: true },
            { name: "seoDescription", type: "string" },
            { name: "body", type: "markdown" }
          ]
        },

        // SECTION MODELS (Squarespace-style blocks)
        {
          name: "Hero",
          type: "object",
          fields: [
            { name: "headline", type: "string", required: true },
            { name: "subheadline", type: "text" },
            { name: "buttonText", type: "string" },
            { name: "buttonLink", type: "string" }
          ]
        },
        {
          name: "Services",
          type: "object",
          fields: [
            { name: "heading", type: "string" },
            {
              name: "items",
              type: "list",
              items: {
                type: "object",
                fields: [
                  { name: "title", type: "string", required: true },
                  { name: "description", type: "text" }
                ]
              }
            }
          ]
        },
        {
          name: "Gallery",
          type: "object",
          fields: [
            { name: "heading", type: "string" },
            { name: "images", type: "list", items: { type: "image" } }
          ]
        },
        {
          name: "Testimonials",
          type: "object",
          fields: [
            { name: "heading", type: "string" },
            {
              name: "items",
              type: "list",
              items: {
                type: "object",
                fields: [
                  { name: "quote", type: "text", required: true },
                  { name: "author", type: "string" }
                ]
              }
            }
          ]
        },
        {
          name: "CTA",
          type: "object",
          fields: [
            { name: "text", type: "text" },
            { name: "buttonText", type: "string" },
            { name: "buttonLink", type: "string" }
          ]
        }
      ]
    })
  ]
});
