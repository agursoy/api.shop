module.exports = {
  apps: [
    {
      name: "api.shop",
      script: "npm",
      args: "start",
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};