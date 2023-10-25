const { NextFederationPlugin } = require("@module-federation/nextjs-mf")
const pkg = require("./package.json")
const deps = pkg.dependencies

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    /**
     * @type {import('@module-federation/nextjs-mf/utilities').ModuleFederationPluginOptions}
     **/
    const federationConfig = {
      name: 'legacy',
      filename: 'static/chunks/remoteEntry.js',
      exposes: {
        './home': "./pages/index.js",
        './mui': "./pages/mui.js",
        './simple': "./pages/simple.js"
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"]
        }
      }
    }

    config.plugins.push(new NextFederationPlugin(federationConfig));
    return config;
  }
}
