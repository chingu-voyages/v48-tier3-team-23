const lint = (filenames) => `biome check . --apply ${filenames.join(' ')}`;

const format = (filenames) => `biome format --write ${filenames.join(' ')}`;

const typeCheck = () =>
  'yarn tsc --noEmit --project tsconfig.json --pretty --noEmit';

export default {
  // Type check TypeScript files
  '**/*.(ts|tsx)': [typeCheck],

  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js)': [format, lint],
};
