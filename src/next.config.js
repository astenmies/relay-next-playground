require("dotenv").config()

const path = require("path")
const Dotenv = require("dotenv-webpack")
const dotEnvPath = path.join(__dirname, "..", ".env")

module.exports = {
  webpack: (config) => {
    config.plugins = config.plugins || []
    config.plugins.push(new Dotenv({ path: dotEnvPath, systemvars: true }))

    return config
  }
}
