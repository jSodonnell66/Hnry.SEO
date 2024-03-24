module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("static");

    eleventyConfig.addPassthroughCopy("_scripts");

    eleventyConfig.addPassthroughCopy("_styles");

    eleventyConfig.setTemplateFormats(["md", "html", "njk"]);

    return {
        dir: {
            input: "_posts",
            output: "_site",
            includes: "../_includes"
        },
    };
};
