---
id: docusaurus
title: Docusaurus
sidebar_label: Docusaurus
---

## What is Docusaurus?

In this page, we will be talking about V2 of docusaurus, which is currently in alpha.

Docusaurus is a performant static site generator and can be used to create most content-driven websites such as documentation, blogs, or landing pages fairly quickly.
HTML files are statically generated for every possible path.
Write with MDX.
Site is fully searchable with Algolia DocSearch.
Docusaurus is built with React and is fully customizable. There are many open-source components available to add into your project.

Development features include hot reloading, and easy deployment to static hosting providers.

## Getting Started

Docusaurus is essentially a set of NPM packages that can be easily installed through NPM.

To get started, use the default project template, which includes standard documentation, a blog, custom pages, and a CSS framework with dark mode support.

```
npx @docusaurus/init@next init my-website classic
```

Upon running this command, we should have a file structure generated for us that looks something like this.

```
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── package.json
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```

`/blog/` - Contains the blog markdown files. You can delete the directory if you do not want/need a blog. More details can be found in the blog guide.
`/docs/` - Contains the markdown files for the docs. Customize the order of the docs sidebar in sidebars.js. More details can be found in the docs guide.
`/src/` - Non-documentation files like pages or custom React components. You don't have to strictly put your non-documentation files in here but putting them under a centralized directory makes it easier to specify in case you need to do some sort of linting/processing
`/src/pages` - Any files within this directory will be converted into a website page. More details can be found in the pages guide.
`/static/` - Static directory. Any contents inside here will be copied into the root of the final build directory.
`/docusaurus.config.js` - A config file containing the site configuration. This is the equivalent of siteConfig.js in Docusaurus 1.
`/package.json` - A Docusaurus website is a React app. You can install and use any npm packages you like in them.
`/sidebar.js` - Used by the documentation to specify the order of documents in the sidebar.

To start a dev server, first cd into the website directory, in this case `cd my-website` and `npm start`.
When we're done editing our content we can run `npm run-script build` to build our site into a static `build` directory which can be easily deployed to hosting sites later.