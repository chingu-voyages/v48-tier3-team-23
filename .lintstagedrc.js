const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const format = (filenames) => `yarn prettier --write ${filenames.join(' ')}`;

const typeCheck = () =>
  `yarn tsc --noEmit --project tsconfig.json --pretty --noEmit`;

module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': [typeCheck],

  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js)': [format, buildEslintCommand],
};
