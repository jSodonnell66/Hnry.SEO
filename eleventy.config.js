const nunjucks = require("nunjucks");

module.exports = function (eleventyConfig) {
    eleventyConfig.addCollection('post', function(collectionApi) {
        return collectionApi.getAll().filter(item => item.data.layout !== 'landing').sort((a, b) => b.date - a.date);
    });

    eleventyConfig.addPassthroughCopy("static");

    eleventyConfig.setTemplateFormats(["md", "html", "njk"]);

    eleventyConfig.setLibrary("njk", nunjucks);

    return {
        dir: {
            input: "_src",
            output: "_site",
            includes: "_includes",
        },
    };
};
