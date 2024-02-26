module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'eslint-config-prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
  plugins: ['react', 'react-hooks', 'prettier', 'import'],
  rules: {
    // eslint (http://eslint.cn/docs/rules)
    'no-var': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'jsx-quotes': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],

    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-unused-vars': 'warn', // 可调试但不可提交

    'import/order': [
      'warn',
      {
        // 对导入模块进行分组
        groups: ['builtin', 'external', ['internal', 'parent', 'sibling', 'index', 'object', 'type'], 'unknown'],
        // 通过路径自定义分组
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: 'antd',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: '@ant-design/**',
            group: 'builtin',
            position: 'before'
          },
          {
            // pattern：当前组中模块的最短路径匹配
            pattern: '@/**', // 在规定的组中选其一，index、sibling、parent、internal、external、builtin、object、type、unknown
            group: 'external',
            // 定义组的位置，after、before
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        warnOnUnassignedImports: false
      }
    ]
  }
};
