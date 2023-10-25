const { NextFederationPlugin } = require("@module-federation/nextjs-mf")
const pkg = require("./package.json")
const deps = pkg.dependencies

module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options
    /**
     * @type {import('@module-federation/nextjs-mf/utilities').ModuleFederationPluginOptions}
     **/
    const federationConfig = {
      name: 'shell',
      filename: 'static/chunks/remoteEntry.js',
      remotes: {
        'legacy': `legacy@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
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
