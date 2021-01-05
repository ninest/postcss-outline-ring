const postcss = require("postcss");

const plugin = require("./");

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  });
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

it("transforms outline-ring to box-shadow", async () => {
  await run(
    "a{ outline-ring: SIZE COLOR }",
    "a{ outline: none; box-shadow: 0 0 0 SIZE COLOR }",
    {}
  );
  await run(
    "a:hover{ outline-ring: 3px red }",
    "a:hover{ outline: none; box-shadow: 0 0 0 3px red }",
    {}
  );

  await run(
    "a:hover{ outline-ring: 3px red }",
    "a:hover{ box-shadow: 0 0 0 3px red }",
    { outlineNone: false }
  );
});
