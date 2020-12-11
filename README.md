# react-motion-graphics

**Leverage web technologies**: Canvas, SVG, WebGL
**Leverage programming**: variables, API, variants, physics...
**Leverage React**: Reusable components, Powerful composition, Fast Refresh

**Modern Javascript**: Typescript, React 17-based videos with ESLint rules which help you move faster.

## Run the examples

- Need ffmpeg in your PATH

Install the repo:

```
npm i && npx lerna bootstrap
```

Run an example, for example `ReactSvg`:

```
cd packages/cli
npx ts-node --files src/preview.ts ../example/src/ReactSvg/index.tsx
```

Render a video:

```
cd packages/cli
npx ts-node --files src/index.ts ../example/src/ReactSvg/index.tsx
```