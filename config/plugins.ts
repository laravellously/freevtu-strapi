export default ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_fJLuR2h3FHzNegaSY9zPSFwEKVZA/PNGGCZsTgP",
      apiToken: "fdaEMGTtAfQ2iG02TYQ6SDx6",
      appFilter: "ogasaswap",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
  "multi-tenant": {
    enabled: true,
  },
});
