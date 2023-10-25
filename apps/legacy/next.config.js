const { NextFederationPlugin } = require("@module-federation/nextjs-mf")

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
        './home': "./pages/home.js",
        './mui': "./pages/mui.js"
      }
    }

    config.plugins.push(new NextFederationPlugin(federationConfig));
    return config;
  }
}
