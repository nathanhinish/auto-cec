'use strict'

const COMPLEXITY_NUM = 11
const MAX_LINE_LENGTH = 120
const MAX_PARAMS = 5
const MAX_STATEMENTS = 30

module.exports = {
  plugins: ['react'],
  'parser': 'babel-eslint',
  'ecmaFeatures': {
    templateStrings: true
  },
  'env': {
    'browser': true,
    'builtin': true,
    'es6': true,
    'node': true,
    'mocha': true
  },
  'globals': {},
  'rules': {
    'linebreak-style': 0,
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-constant-condition': 2,
    'no-bitwise': 2,
    'no-caller': 2,
    'no-case-declarations': 1,
    'no-catch-shadow': 2,
    'no-class-assign': 2,
    'no-cond-assign': [2, 'except-parens'],

    'no-console': 0,
    'no-const-assign': 2,
    'no-continue': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-delete-var': 2,
    'no-div-regex': 2,
    'no-dupe-class-members': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-else-return': 1,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-labels': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 1,
    'no-extra-semi': 2,
    'no-fallthrough': 1,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implicit-coercion': 1,

    'no-implied-eval': 2,
    'no-inline-comments': 0,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-invalid-this': 1,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 1,
    'no-loop-func': 2,
    'no-magic-numbers': 1,
    'no-mixed-requires': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 1,
    'no-multi-str': 2,
    'no-multiple-empty-lines': 1,
    'no-native-reassign': 2,
    'no-negated-condition': 0,
    'no-negated-in-lhs': 2,
    'no-nested-ternary': 1,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-require': 2,

    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 0,
    'no-param-reassign': 0,
    'no-path-concat': 0,
    'no-plusplus': 2,
    'no-process-env': 0,
    'no-process-exit': 0,
    'no-proto': 2,
    'no-redeclare': 1,
    'no-regex-spaces': 2,
    'no-restricted-imports': 0,
    'no-restricted-modules': 0,
    'no-restricted-syntax': 0,
    'no-return-assign': 1,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-sync': 0,
    'no-ternary': 0,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 1,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 1,
    'no-underscore-dangle': 1,
    'no-unexpected-multiline': 2,

    'no-unneeded-ternary': 1,
    'no-unreachable': 1,
    'no-unused-expressions': 1,
    'no-unused-vars': [1, {'vars': 'local', 'args': 'after-used', 'varsIgnorePattern': '(_|React)'}],
    'no-use-before-define': 2,
    'no-useless-call': 2,
    'no-useless-concat': 1,

    'no-var': 1,
    'no-void': 2,
    'no-warning-comments': 0,

    'no-with': 2,

    'accessor-pairs': 0,
    'array-bracket-spacing': 0,
    'array-callback-return': 0,
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'arrow-spacing': 0,
    'block-scoped-var': 2,
    'block-spacing': 0,
    'brace-style': 0,
    'callback-return': 0,
    'camelcase': 2,
    'comma-dangle': 2,
    'comma-spacing': 0,
    'comma-style': [2, 'last'],
    'complexity': [1, COMPLEXITY_NUM],
    'computed-property-spacing': 0,
    'consistent-return': 0,
    'constructor-super': 0,
    'consistent-this': 0,
    'curly': [2, 'all'],
    'default-case': 0,
    'dot-location': [2, 'property'],
    'dot-notation': [2, {'allowKeywords': true}],
    'eol-last': 2,
    'eqeqeq': [2, 'allow-null'],
    'func-names': 0,
    'func-style': 0,
    'generator-star-spacing': 0,
    'global-require': 0,
    'guard-for-in': 0,
    'handle-callback-err': 0,
    'id-length': 0,
    'id-match': 0,
    'indent': [1, 2, {'SwitchCase': 1}],
    'init-declarations': 0,
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': 1,

    'lines-around-comment': 0,
    'max-depth': 0,
    'max-len': [1, MAX_LINE_LENGTH],
    'max-nested-callbacks': 0,
    'max-params': [1, MAX_PARAMS],
    'max-statements': [1, MAX_STATEMENTS],
    'new-cap': 1,
    'new-parens': 2,
    'newline-after-var': 0,
    'object-curly-spacing': 1,
    'object-shorthand': 1,
    'one-var': [1, 'never'],
    'operator-assignment': 0,
    'operator-linebreak': 0,
    'padded-blocks': 0,
    'prefer-arrow-callback': 0,
    'prefer-const': 0,
    'prefer-reflect': 0,
    'prefer-rest-params': 0,
    'prefer-spread': 0,
    'prefer-template': 0,
    'quote-props': [0, 'consistent-as-needed'],
    'quotes': [2, 'single'],
    'radix': 2,
    'require-jsdoc': [1, {
      'require': {
        'FunctionDeclaration': false,
        'MethodDefinition': true
      }
    }],
    'require-yield': 1,
    'semi': [1, 'never'],
    'semi-spacing': 0,

    'sort-imports': 0,
    'sort-vars': 1,
    'space-before-blocks': 2,
    'space-before-function-paren': [1, {
      anonymous: 'always',
      named: 'never'
    }],
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'spaced-comment': 1,


    'strict': [1, 'global'],
    // required by 'babel-eslint'
    'use-isnan': 2,
    'valid-jsdoc': 1,
    'valid-typeof': 2,
    'vars-on-top': 1,
    'wrap-iife': [2, 'inside'],
    'wrap-regex': 0,
    'yoda': 1
  }
}
