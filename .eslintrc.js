module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react", "jsx-a11y", "import"
  ],
  "globals": {
    "document": true,
    "console": true,
    "window": true
  },
  "rules": {
    "linebreak-style": "off",
    "arrow-body-style": "off",
    "react/prefer-stateless-function": "warn",
    "react/prop-types": "warn",
    "comma-dangle": [
      "error", "never"
    ],
    "comma-dangle": [
      "error", {
        "arrays": "never",
        "objects": "never",
        "imports": "never",
        "exports": "never",
        "functions": "ignore"
      }
    ],
    "object-curly-spacing": [
      "error", "never"
    ],
    "react/jsx-space-before-closing": [
      "error", "never"
    ],
    "react/jsx-tag-spacing": [
      "error", {
        "closingSlash": "never",
        "beforeSelfClosing": "never",
        "afterOpening": "never"
      }
    ]
  }
};
