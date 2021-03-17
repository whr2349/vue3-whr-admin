module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "no-mixed-spaces-and-tabs": [0],
        "no-multiple-empty-lines": [0, {"max": 100}],
        "semi": [0],
        "no-unused-vars": [1, {
            "vars": "local",
            "args": "none"
        }],
        "no-undef": [1]
    },
}
