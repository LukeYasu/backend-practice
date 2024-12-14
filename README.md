# LearningFuze Vite React Template

A template consisting of everything you need to jump-start your next Vite + React web app!

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirement)
- [Getting Started](#getting-started)
- [Important Note](#important-note)
- [Installed Packages](#installed-packages)

## Overview

Here is a general overview of the main tools & dependencies used throughout the template

- [TypeScript](https://www.typescriptlang.org) - A typed superset of JavaScript designed with large scale applications in mind
- [ESLint](https://eslint.org) - Static code analysis to help find problems within a codebase
- [Prettier](https://prettier.io) - An opinionated code formatter
- [Vite](https://vitejs.dev) - Feature rich and highly optimized frontend tooling with TypeScript support out of the box
- [React](https://react.dev) - A modern front-end JavaScript library for building user interfaces based on components
- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework packed with classes to build any web design imaginable
- [React Router](https://reactrouter.com/en/main) - A library for routing in React applications that allows for dynamic, client-side navigation and URL management
- [Husky](https://github.com/typicode/husky#readme) - Git hooks to check for any errors before pushing

A more detailed list of the included packages can be found in the [Installed Packages](#installed-packages) section. Packages not shown above include Devtools, ui helper libraries, and eslint plugins/configs.

## Requirements

- [NodeJS 18+](https://nodejs.org/en)

## Getting Started

Below is a list of steps on how to generate a repository based off of the template, and how to clone and install the project

### Generate the repository

Generate your repository using [this template provided by LearningFuze](https://github.com/Learning-Fuze/vite-react-template/generate).

1. Set the owner to your own GitHub account.
1. Give the project a name
1. Optional: Give the project a description (You can do this at a later time)
1. Do not include all branches.
1. Click Create repository from template.

### Cloning the repository

After the repository has been generated, click on the on the "Code" button on the repository page and copy the SSH URL. Then inside of your terminal, run the following command

```
git clone <sshURL>
```

Then change into the new directory

```
cd <projectName>
```

Install the dependencies

```
npm install
```

Start your dev server

```
npm run dev
```

Congrats! You're all set! You are now free to start working on the new project

## Important Note

Due to empty directories not being included in git commits, placeholder README files have been added to these empty directories. These README files contain simple descriptions about how the different directories in the accompanying folder structure may be used. As an example check out the [recommended component organizational structure](src/components/README.md).

## Installed Packages

A simplified list can be found in the [Overview](#overview) section.

### Base

- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)
- [React](https://react.dev)

### Routing

- [React Router](https://reactrouter.com/en/main)

### Linting & Formatting

- [ESLint](https://eslint.org)
  - [typescript-eslint](https://typescript-eslint.io)
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#readme)
  - [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react#readme)
  - [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
  - [eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh)
- [Prettier](https://prettier.io)

### Git

- [Husky](https://github.com/typicode/husky#readme)
