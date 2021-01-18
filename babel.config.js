module.exports = {
  presets: [
    [
      "@babel/env",
      {
        "targets": {
          "edge": "12",
          "firefox": "5",
          "chrome": "20",
          "safari": "7",
        },
        "useBuiltIns": "usage",
        "corejs": "3.8.2",
      }
    ]
  ]
}
