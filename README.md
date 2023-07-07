# Graphene Docs

Graphene docs are powered by [gatsby](https://github.com/gatsbyjs/gatsby).

## Installation

To run the docs locally, you have to execute

```bash
yarn
```

followed by

```bash
yarn develop
```

## Build

To build the docs in the `public` dir, just run:

```bash
yarn build
```

## Playground (temporarily disabled)

If you also want to have the playground running, just execute

```
./playground/graphene-js/build.sh
```

This command will clone the [pypyjs-release-nojit](https://github.com/pypyjs/pypyjs-release-nojit) repo, update it with the latest graphene, graphql-core and graphql-relay code, and make it available for the `/playground` view in the docs.

## Automation

Each time we modify the docs in the `master` branch a Netlify job runs and updates the website, so [Graphene's website](https://graphene-python.org) always has the latest layout.
