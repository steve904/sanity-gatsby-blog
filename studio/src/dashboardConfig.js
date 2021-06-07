export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60be615884fe4c0d2e870714",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-uao8oszn",
                  apiId: "a71df331-d16b-4e52-ab0d-ec8283abc426",
                },
                {
                  buildHookId: "60be6158debb92096ed28e6d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-4vao81r2",
                  apiId: "f0bd408e-2687-4e06-a305-5b71b286e361",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/steve904/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-4vao81r2.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
