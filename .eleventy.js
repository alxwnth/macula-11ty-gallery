module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "_includes/style.css": "style.css" });
};
