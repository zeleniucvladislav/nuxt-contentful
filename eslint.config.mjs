import withNuxt from './.nuxt/eslint.config.mjs'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import vueParser from 'vue-eslint-parser'

export default withNuxt({
  files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.vue'],
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: typescriptEslintParser,
      project: './tsconfig.json',
      extraFileExtensions: ['.vue']
    }
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false
      }
    ],
    '@typescript-eslint/no-var-requires': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'any'
        }
      }
    ]
  },
  plugins: {
    '@typescript-eslint': typescriptEslint,
    prettier: prettier
  },
  ignores: [
    'node_modules',
    'dist',
    '.nuxt',
    '.output',
    'coverage',
    'components.d.ts',
    'nuxt.d.ts'
  ]
})
