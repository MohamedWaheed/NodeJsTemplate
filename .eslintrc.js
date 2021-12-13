module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: [
        "airbnb-base"
    ],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: "module"
    },
    rules: {
        quotes: [2, "double"],
        indent: ["error", 4],
        "no-plusplus": "off",
        "no-bitwise": "off",
        radix: "off",
        "space-before-blocks": ["error", "never"],
        "comma-dangle": ["error", "never"],
        "brace-style": ["error", "stroustrup"],
        "no-console": "off",
        "max-classes-per-file": ["error", 2],
        "max-len": ["error", { code: 150 }]
    }
};
