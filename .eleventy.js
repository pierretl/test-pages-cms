const fs = require('fs');
const matter = require('gray-matter');

module.exports = async  function (eleventyConfig) {

    //obtenir le contenu uniquement d'un fichier md sans le front matter
    eleventyConfig.addFilter("contentOnly", function(filePath) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { content } = matter(fileContent);
        return content;
    });
    
    //obtenir le contenu d'un fichier md
    const { RenderPlugin } = await import("@11ty/eleventy");
    eleventyConfig.addPlugin(RenderPlugin);


    //config global
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