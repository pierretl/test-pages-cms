module.exports = function (eleventyConfig) {
    return {
        passthroughFileCopy: true,
        dir: {
            input: "sources",
            data: '_data',
            output: "_site",
            include: "_includes",
        }
    }
};