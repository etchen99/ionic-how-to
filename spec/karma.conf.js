var webpackConfig = require("./webpack.test.js");

module.exports = function(config) {
  var _config = {
    basePath: "",

    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },

    frameworks: ["jasmine"],

    files: [{ pattern: "./karma-test-shim.js", watched: true }],

    preprocessors: {
      "./karma-test-shim.js": ["webpack", "sourcemap"],
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: "errors-only"
    },

    webpackServer: {
      noInfo: true
    },

    coverageIstanbulReporter: {
      reports: ["html", "lcovonly"],
      fixWebpackSourcePaths: true,
      thresholds: {
        statements: 1,
        lines: 1,
        branches: 1,
        functions: 1
      }
    },

    browserConsoleLogOptions: {
      level: "log",
      format: "%b %T: %m",
      terminal: true
    },

    reporters: config.coverage
      ? ["kjhtml", "dots", "coverage-istanbul"]
      : ["kjhtml", "dots"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,

    browsers: config.headless
      ? ["ChromeHeadless"]
      : ["Chrome"],

    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--no-sandbox',
          '--headless',
          '--disable-gpu',
          '--remote-debugging-port=9222',
        ]
      }
    },

    singleRun: false
  };

  config.set(_config);
};
