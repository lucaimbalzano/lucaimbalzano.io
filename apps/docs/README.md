# @simbashrd/docs

📖 **Documentation for simbashrd's Blog Projects**

This repository contains the documentation for **simbashrd's** blog projects, built using **Next.js** and other modern tools.

## 🚀 Getting Started

### **Installation**

First, make sure you have **pnpm** installed. Then, install dependencies:

```sh
pnpm install
```

## Development

To start the local development server, run:

```sh
pnpm dev
This will start the Next.js app on http://localhost:3002.
```

## Building the Project

To build the project for production:

```sh
pnpm build
If you need to generate MDX content
```

```sh
pnpm build:mdx
Linting & Type Checking
```

Run the linter to check for code style issues:

```sh
pnpm lint
```

To automatically fix linting errors:

```sh
pnpm lint:fix
```

To check for TypeScript errors:

```sh
pnpm type-check
```

# 📦 Project Structure

```
.
├── public/            # Static assets
│   └── img/          # Images
├── src/              # Source code
│   ├── components/   # Reusable UI components
│   ├── templates/    # MDX templates
│   └── index.ts      # Entry point
├── package.json      # Project dependencies & scripts
├── tsconfig.json     # TypeScript configuration
└── eslint.config.mjs # ESLint configuration
```
