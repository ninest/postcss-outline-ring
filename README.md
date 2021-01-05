# Outline Ring

> Add an outline ring that's separate from `border`. Made to be used with `:focus`

## Docs

```css
.sel:hover {
  outline-ring: 5px blue;
}
```

This results in

```css
.sel:hover {
  outline: none;
  box-shadow: 0 0 0 5px blue;
}
```

## Build setup

Clone or fork the repository,

```bash
yarn
```

Make changes, then run tests

```bash
yarn test
```

# License

MIT
