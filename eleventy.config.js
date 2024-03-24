module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("static");

    eleventyConfig.addPassthroughCopy("scripts");

    eleventyConfig.addPassthroughCopy("styles");

    eleventyConfig.setTemplateFormats(["md", "html", "njk"]);

    return {
        dir: {
            input: "_posts",
            output: "site",
            includes: "/_includes"
        },
    };      
};