# React Template

A react template that includes react testing, proptypes, react router, and tailwind css.

## How to Use

If you would like to create a new repository on github using this template, then:

1. Go to the main folder of the template repo.
2. Click on "Use this template"
3. Click on "Create a new repository".
4. Clone the repository to your local directory and then install all dependencies using:

```
npm install
```

If you would like to create a local copy of the repo without creating a new repo on github or affecting the original repo, then:

1. Go to the main folder of the template repo.
2. Click on "Code".
3. Click on "Download ZIP".
4. After extracting the files, install all dependencies using:

```
npm install
```

If you are using VScode, it is recommended to follow the Suggested Settings section as well.

## Suggested Settings

The following VScode extensions will provide quality of life features when using this template: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), and [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).

To make sure that the above extensions work together properly, the following are the VScode Workspace Settings (JSON) that were used when creating this template:

```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript"],

  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.formatOnSave": true,

  // Always open css files in Tailwind CSS mode, which fixes unknown tailwind @rules warning.
  "files.associations": {
    "*.css": "tailwindcss"
  },

  // Improves tailwind autocomplete experience.
  "editor.quickSuggestions": {
    "strings": "on"
  }
}
```

## Troubleshooting

If your classes are not automatically sorting despite having Tailwind CSS IntelliSense and the Tailwind Prettier plugin, then make sure that your Prettier config file (.prettierrc) includes:

```
"plugins": ["prettier-plugin-tailwindcss"]
```

If you are getting the VScode warnings for Tailwind custom @rules, then make sure that Tailwind CSS IntelliSense is installed, and that your VSCode Workspace Settings include:

```
  "files.associations": {
    "*.css": "tailwindcss"
  },
```
