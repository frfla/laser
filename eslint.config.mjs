import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginPrettier from 'eslint-plugin-prettier'
import configPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      'no-unused-vars': 'warn',
    },
  },

  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginPrettier.configs.flat.recommend,
  configPrettier,
]
