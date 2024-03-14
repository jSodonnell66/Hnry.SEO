module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("static");
    eleventyConfig.setTemplateFormats(["md", "html", "njk"]);

    return {
        dir: {
            input: "_src",
            output: "_site",
            includes: "includes",
        },
    };
};
