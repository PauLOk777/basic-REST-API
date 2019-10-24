module.exports = {
    env: {
        node: true,
        es6: true,
    },
    extends: 'eslint:recommended',
    rules: {
        indent: [1, 4],
        semi: [1, 'always'],
        'brace-style': [1, '1tbs'],
        'no-unused-vars': [1],
        'no-console': [0],
    },
};
