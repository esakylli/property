SystemJS.config({
  baseURL: ".",
  packages: {
    "ts": {
      "main": "plugin.js"
    },
    "typescript": {
      "main": "lib/typescript.js",
      "meta": {
        "lib/typescript.js": {
          "exports": "ts"
        }
      }
    },
    "app": {
      "main": "app.tsx",
      "defaultExtension": "tsx",
      "format": "esm",
      "meta": {
        "*.tsx": {
          "loader": "ts"
        }
      }
    },
    "promaster-react": {
      "main": "index.tsx",
      "defaultExtension": "tsx",
      "format": "system",
      "meta": {
        "*.tsx": {
          "loader": "ts"
        }
      }
    },
    "promaster-primitives": {
      "main": "lib/index.js",
      "format": "cjs"
    },
    "promaster-portable": {
      "main": "lib/index.js",
      "format": "cjs"
    },
    "csjs": {
      "main": "index.js",
      "defaultExtension": "js",
      "format": "cjs"
    },
    "react-csjs": {
      "main": "lib/index.js",
      "defaultExtension": "js",
      "format": "cjs"
    }
  },
  map: {
    "ts": "../node_modules/plugin-typescript/lib/",
    "typescript": "../node_modules/typescript/",
    "react": "../node_modules/react/dist/react.js",
    "react-dom": "../node_modules/react-dom/dist/react-dom.js",
    "csjs": "../node_modules/csjs/",
    "insert-css": "../node_modules/insert-css/index.js",
    "app": "./app",
    "promaster-react": "../src",
    "promaster-primitives": "../node_modules/promaster-primitives",
    "promaster-portable": "../node_modules/promaster-portable"
  },
  typescriptOptions: {
    module: "system",
    noImplicitAny: true,
    jsx: "react"
  }
});
