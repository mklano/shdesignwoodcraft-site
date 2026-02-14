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
