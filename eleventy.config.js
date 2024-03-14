const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(EleventyRenderPlugin);

    eleventyConfig.addPlugin(pluginWebc, {
        components: "_src/_components/*.webc",
        useTransform: false,
        transformData: {},
        bundlePluginOptions: {},
    });

    eleventyConfig.addCollection('post', function(collectionApi) {
        return collectionApi.getAll().filter(item => item.data.layout !== 'landing').sort((a, b) => b.date - a.date);
    });

    eleventyConfig.addPassthroughCopy("static");

    eleventyConfig.setTemplateFormats(["md", "webc", "html", "liquid"]);

    eleventyConfig.setLibrary("md", require("markdown-it")());

    return {
        dir: {
            input: "_src",
            output: "_site",
            includes: "_includes",
        },
    };
};
