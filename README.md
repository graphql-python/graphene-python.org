# Graphene Docs

Graphene docs are powered by [gatsby](https://github.com/gatsbyjs/gatsby).

## Installation

For running locally this docs. You have to execute

```bash
yarn
```

And then

```bash
yarn develop
```

## Build

For building the docs into the `public` dir, just run:

```bash
yarn build
```

## Playground (temporaly disabled)

If you want to have the playground running too, just execute

```
./playground/graphene-js/build.sh
```

This command will clone the [pypyjs-release-nojit](https://github.com/pypyjs/pypyjs-release-nojit) repo, update it with the latest graphene, graphql-core and graphql-relay code, and make it available for the `/playground` view in the docs.

## Automation

Each time we modify the docs in the `master` branch Netlify job runs and updates the website, so [Graphene's website](https://graphene-python.org) have always the latest layout.
