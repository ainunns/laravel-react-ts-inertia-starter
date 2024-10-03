export default {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "npm run check",

  // Lint & Prettify TS and JS files
  "**/*.(ts|tsx|js)": () => [`npm run lint:write `, `pnpm run format:write`],
};
