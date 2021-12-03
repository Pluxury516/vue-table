module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    camelcase: 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'eol-last': 0,
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        multiline: 'never',
        singleline: 'never'
      }
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        endTag: 'never',
        selfClosingTag: 'always',
        startTag: 'never'
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        multiline: {
          allowFirstLine: false,
          max: 1
        },
        singleline: 1
      }
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: true
      }
    ]
  }
}
