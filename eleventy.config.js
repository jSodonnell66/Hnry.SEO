const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginWebc);

  eleventyConfig.addPassthroughCopy("static");

  eleventyConfig.setOutputDir("public");

  eleventyConfig.setTemplateFormats(["md", "webc", "html"]);

  eleventyConfig.setLibrary(
    "md",
    require("markdown-it")(/* your options here */)
  );

  // Add other custom configurations or filters as needed

  // Add collections or custom data as needed

  // Add custom shortcodes as needed

  // Return any additional configuration options
};
