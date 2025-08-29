# Astro Starter Kit: Basics

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
# dewdew-world

---

## Source Versioning

> Use the commands below to manage the source version.
> We use HeadVer instead of semVer.
> Example: 1.2508.2
> Major.YYMM.Patch

1. Main (Major) version bump
> Use this when major features have changed.

```sh
yarn version:major
# or
npm run version:major
```

Result: 1.2508.1 -> 2.2508.1

2. Year-Month (Minor) version bump
> Use this when the year or month changes.

```sh
yarn version:minor
# or
npm run version:minor
```

Result: 1.2508.1 -> 2.2509.1

3. Patch version bump
> Use this for improvements, fixes, or refactoring.

```sh
yarn version:patch
# or
npm run version:patch
```

Result: 1.2508.1 -> 1.2508.2

4. Reset version
> Caution! Avoid resetting the version unless absolutely necessary.

```sh
yarn version:clear
# or
npm run version:clear
```
