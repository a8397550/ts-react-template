module.exports = {
  'env': {
    'commonjs': true,
    'es2021': true
  },
  'extends': [
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': { 'jsx': true },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    'jsx-quotes': ['error', 'prefer-single'],
    // 统一单引号
    'quotes': ['error', 'single'],
    // 大括号中必须用空格分割
    'block-spacing': ['error', 'always'],
    'no-mixed-spaces-and-tabs': ['error'],
    // 禁止尾行空格
    'no-trailing-spaces': 1,
    // 强制使用一致的缩进
    'indent': ['error', 2],
    // 不允许 fn ();  这种语法
    'func-call-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': ['error', { 'multiline': true }],
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'always',
      'asyncArrow': 'always'
    }],
    'space-infix-ops': 1,
    'keyword-spacing': 1
  }
};
