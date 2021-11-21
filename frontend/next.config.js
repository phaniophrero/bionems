const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "_variables.scss";`,
  },
  env: {
    key: "AIzaSyDZFoCzYRsoCJZBsyC6PGtR1j0cTky4ams",
  },
  images: {
    domains: ["localhost"],
  },
};
