const NodeExternals = require("webpack-node-externals");

module.exports = {
  // ...
  externals: [NodeExternals()],
  // ...
};
