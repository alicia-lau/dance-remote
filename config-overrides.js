module.exports = function override(config, env) {
  // Override the output filename for JavaScript in production
  if (env === "production") {
    config.output.filename = 'static/js/bundle.js';
  }
  return config;
};