module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("static");

    eleventyConfig.setTemplateFormats(["md", "html", "njk"]);

    eleventyConfig.setLibrary("njk", require("nunjucks"));

    return {
        dir: {
            input: "_src",
            output: "_site",
            includes: "_includes",
        },
    };
};
