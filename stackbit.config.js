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
        {
          name: "Home",
          type: "page",
          urlPath: "/",
          filePath: "src/content/pages/index.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "seoDescription", type: "string" },
            { name: "body", type: "markdown" }
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
        }
      ]
    })
  ]
});
