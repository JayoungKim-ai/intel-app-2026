const { getDefaultConfig } = require("expo/metro-config");
const config = getDefaultConfig(__dirname);

config.watcher = {
  polling: {
    interval: 1000,
  },
};

module.exports = config;
