module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("static");
    eleventyConfig.setTemplateFormats(["md", "html", "njk"]);

    return {
        dir: {
            input: "_posts",
            output: "_site",
            includes: "../_includes",
             scripts: "../_scripts",
        },
    };
};
