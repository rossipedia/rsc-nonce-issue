Demonstrates an issue with `@vitejs/plugin-rsc` where render-discovered client reference modules are added without a `nonce`, even if one is passed to the render.

### Reproduction

> Requires a version of node that can execute `.ts` files (>= v22.18.0)

```sh
npm install
npm run build
node server.ts
```
