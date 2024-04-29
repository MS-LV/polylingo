module.exports = {
  "root": true,
  "ignorePatterns": [
    "projects/**/*",

  ],

  "rules": {


  },
  // "extends": ["@rx-angular/recommended"],
  "extends": [
    "eslint:recommended",

  ],

  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      "extends": [
        "eslint:recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked"
      ],
      "rules": {
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/await-thenable": "error",
        "array-callback-return": "error",
        "constructor-super": "error",
        "for-direction": "error",
        "getter-return": "error",
        "no-cond-assign": "error",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/no-explicit-any": [
          "warn",
          {
            "ignoreRestArgs": true
          }
        ],
        "no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
            "warn",
            {
                "vars": "all",
                "varsIgnorePattern": "^_",
                "args": "after-used",
                "argsIgnorePattern": "^_",
            },
        ],
      },
      "parser": "@typescript-eslint/parser",
      "plugins": [
        "@typescript-eslint",
        "unused-imports"
      ],
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },

    },
    {
      "files": [
        "*.html"
      ],
      extends: ['plugin:@angular-eslint/template/recommended'],
      parser: "@angular-eslint/template-parser",
      "rules": {
        "@angular-eslint/template/attributes-order": [
          "error",
          {
            "alphabetical": false,
            "order": [
              "STRUCTURAL_DIRECTIVE", // e.g. `*ngIf="true"`, `*ngFor="let item of items"`
              "TEMPLATE_REFERENCE", // e.g. `<input #inputRef>`
              "ATTRIBUTE_BINDING", // e.g. `<input required>`, `id="3"`
              "INPUT_BINDING", // e.g. `[id]="3"`, `[attr.colspan]="colspan"`, [style.width.%]="100", [@triggerName]="expression", `bind-id="handleChange()"`
              "TWO_WAY_BINDING", // e.g. `[(id)]="id"`, `bindon-id="id"
              "OUTPUT_BINDING" // e.g. `(idChange)="handleChange()"`, `on-id="handleChange()"`
            ]
          }
        ],
      }
    },
    {
      "files": [
        "*.html"
      ],
      "excludedFiles": [
        "*inline-template-*.component.html"
      ],
      "extends": [
        "plugin:prettier/recommended",
        // "plugin:@angular-eslint/template/recommended",
        // "plugin:@angular-eslint/template/accessibility"
      ],
      "rules": {
        // NOTE: WE ARE OVERRIDING THE DEFAULT CONFIG TO ALWAYS SET THE PARSER TO ANGULAR (SEE BELOW)
        "prettier/prettier": [
          "error",
          {
            "parser": "angular"
          }
        ]
      }
    },
    {
      "files": [
        "*.js"
      ],
      "extends": [
        "plugin:@typescript-eslint/disable-type-checked"
      ]
    }
  ]
}