const { NextFederationPlugin } = require("@module-federation/nextjs-mf")
const pkg = require("./package.json")
const deps = pkg.dependencies

module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options
    if (isServer) return config
    /**
     * @type {import('@module-federation/nextjs-mf/utilities').ModuleFederationPluginOptions}
     **/
    const federationConfig = {
      name: 'shell',
      filename: 'static/chunks/remoteEntry.js',
      remotes: {
        'legacy': `legacy@http://localhost:3000/_next/static/chunks/remoteEntry.js`,
      }
    }

    config.plugins.push(new NextFederationPlugin(federationConfig));
    return config;
  }
}
