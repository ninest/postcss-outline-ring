const postcss = require("postcss");

const plugin = (opts = { outlineNone: true }) => {
  return {
    postcssPlugin: "OUTLINE_RING",
    Rule(rule) {
      // console.log(rule.toString());
    },
    Declaration: {
      "outline-ring": (node, { Rule }) => {
        const [size, color] = node.value.split(" ");
        node.prop = "box-shadow";
        node.value = `0 0 0 ${size} ${color}`;

        if (opts.outlineNone)
          node.cloneBefore({ prop: "outline", value: "none" });
      },
    },
  };
};

plugin.postcss = true;
module.exports = plugin;
