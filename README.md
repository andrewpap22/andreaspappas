# 🦁 Andreas Pappas's Blog

> The following project is my personal 📖 Blog page build with [Eleventy](https://11ty.dev/) static site generator using [JavaScript templates (`*.11ty.js`)](https://11ty.dev/languages/javascript/).

> It was hugelely inspired by the following project of [Reuben L. Lillie](https://gitlab.com/reubenlillie/eleventy-dot-js-blog/-/tree/master) who also took inspiration from [@zachleat](https://github.com/11ty/eleventy-base-blog/), the creator of Eleventy, as well as from [@hankchizljaw](https://github.com/hankchizljaw/hylia). 

[![Netlify Status](https://api.netlify.com/api/v1/badges/33071dfc-5c6d-4963-a927-4a9f7b8cb57a/deploy-status)](https://app.netlify.com/sites/andreaspappas/deploys)
[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Up on

* [andreaspappas.xyz](https://andreaspappas.xyz/)

## 💬 Summary

The moment I found out about that project I fell in 💘 with it. The minimalistic beautiful style and aesthetics that it provided, as well as the ease of ✏️ writing blog posts by just adding a file (by simply writing your contents with Markdown || HTML || CSS || JavaScript or both of the 4 combined) on a directory and git pushing it made me eager to directly fork it to contribute to it and make my own version out of it as it was MIT licensed. It was the reason that I also made a GitLab account so I could contribute to it! 

So I immediately forked it and started experimenting and playing with it. By doing so I found out that there are lot's of important bugs in the project that had to be fixed in order to use this project as a personal Blog website. An example is that the pagination in the archives Blog page was not working and was throwing you on a 404 page. Another one quite important was on the rendering of the Markdown posts / files, that if you wanted to add an image or a gif in your post it would crash the responsiveness of the rendered HTML page and quite some other ones as well that I found out as I kept playing with it. So I opened an [issue](https://gitlab.com/reubenlillie/eleventy-dot-js-blog/-/issues/62) on the very first one that I've found out, but quite a bit later on I sadly figured out that the project is not maintained anymore by the owner and that it's abandoned thus I was not going to get any help on it. 

But, because I really liked that particular project extremely much, I decided to get it ported onto my GitHub and start spending my free time onto fixing it's issues, adding new features and my 🖌️🎨 on it and eventually make it my own personal Blog page BUT❗ also keep the wonderful idea of Reuben to maintain it as a template / reference project for others to use it as their own Blog || portfolio pages, as the project is hugelyyy documented and it is very easy for anyone to modify it to his liking. 

This README file will serve for that very purpose of detailing all the information && instructions that someone will need to make && modify this blog to make it his own, as well as instructions on how one can deploy and publish the site with **GitHub pages**, **netlify**. I'll also showcase a way to change the default domain of GitHub pages and netlify and add your own custom one. 

> ❗❗ A Blog post on this page can be found for the exact same reason. 👉 [here](https://andreaspappas.xyz/blog/) 

<hr>

> /// NOTE: All the information mentioned above that will be provided are through my own self learning and experience and you have to keep in mind that there are probably lot's of other ways as well (better or not) to achieve the same thing, BUT these are the ones that I personally implemented on this particular project to successfully achieve the desired results. 
> Any issues, suggestions, contributions are much more than welcome and you know where to head to apply them! 

* Probably 👉 [here?](https://github.com/andrewpap22/andreaspappas/issues) 🙂 

<hr>

> How does this Blog work in a setence 👇

The [layouts](https://github.com/andrewpap22/andreaspappas/tree/main/_includes/layouts) are written entirely in vanilla 🍦 JavaScript (files with the [`*.11ty.js`](https://www.11ty.dev/docs/languages/javascript/) extension). Eleventy processes those templates and creates prerendered copies of the site HTML. Similar behaviour can be found for the [Blog posts](https://github.com/andrewpap22/andreaspappas/tree/main/content/posts).

## Features

* 💯 Lighthouse scores for 
  * 💨 Performance 
  * ♿ Accessibility
  * ☑️  Best practices
  * 🔍 Search Engine Optimization
* 🏸 Lightweight front end
  * 🕸 Semantic HTML
  * 🎨 Progressively-enhanced, modular CSS
  * 🍦 Vanilla [JavaScript templates](https://11ty.dev/languages/javascript/)
* 🎛️ Customizable design and data options
* 🍬 [Choose](https://gitlab.com/reubenlillie/eleventy-dot-js-blog/-/blob/master/_includes/shortcodes/favicon.js) between emoji favicons and the Real Favicon Generator
* 💡 Dark/light mode based on user’s system preferences
* 🔣 Multilingual support (instructions in [`./content/README.md`](https://gitlab.com/reubenlillie/eleventy-dot-js-blog/-/blob/master/content/README.md) and [`./_data/README.md`](https://gitlab.com/reubenlillie/eleventy-dot-js-blog/-/blob/master/_data/README.md))
* 🔖 Single archive page of all Blog posts
* 🗒️ Extensive inline documentation

## Project Roadmap

Here’s a list of new features being considered. [Submit a feature request](https://gitlab.com/reubenlillie/eleventy-dot-js-blog/-/issues/new) to add to this list!

* 🎚️ Dark/light mode toggle #14
* 🏷️ Tag archives for blog (coming with [Computed Data](https://www.11ty.dev/docs/data-computed/) in Eleventy v0.11.0) #7
* 🗓 Date archives for blog #16
* 💌 Contact form (using [Netlify Forms](https://docs.netlify.com/forms/setup/)) #17
* 📡 [RSS feed](https://www.11ty.dev/docs/plugins/rss/) for blog posts #3
* 🗺️ Sitemap #54
* 🔍 [Search](https://www.hawksworx.com/blog/adding-search-to-a-jamstack-site/) #18
* 📄 Documentation site #19
* 📣 [Webmentions](https://mxb.dev/blog/using-webmentions-on-static-sites/) #20
* 💬 [Comments](https://jamstack-comments.netlify.com/) #21
* 📝 Integrate with [Netlify CMS](https://www.netlifycms.org/) #22
* ⚙️  Service worker to cache content for offline access #23
* 🖌️ Apply logo/branding assets #24
* 🖍️ [Syntax highlighting](https://www.11ty.dev/docs/plugins/syntaxhighlight/) for code blocks #25
* ✍️  Author information posts (options for mulitple authors and guest submissions) #26

## Getting started

Run a local copy of this site on your computer.

Install [Node.js](https://nodejs.org/) on your machine (see [11ty documentation for version requirements](https://www.11ty.dev/docs/getting-started/)).

Then enter the following commands into your terminal:

### 1. Clone this repository and all its dependencies

```cli
git clone git@gitlab.com:reubenlillie/eleventy-dot-js-blog.git my-blog-directory-name
```

### 2. Go to the working directory

```cli
cd my-blog-directory-name
```
Specifically take a look at the file named [`.eleventy.js`](https://gitlab.com/reubenlillie/eleventy-dot-js-blog/-/blob/master/.eleventy.js) to see if you want to [configure any Eleventy options differently](https://www.11ty.dev/docs/config/).

### 3. Install the project dependencies with [NPM](https://www.npmjs.com/)

```cli
npm install
```

### 4. Edit the `.js` files in the [`_data`](https://gitlab.com/reubenlillie/eleventy-dot-js-blog/-/blob/master/_data/site.js) directory with your site information

### 5. Run Eleventy

```cli
npx eleventy
```

Or build and host locally for local development

```cli
npx eleventy --serve
```

Or build automatically when a template changes

```cli
npx eleventy --watch
```

Or in debug mode

```cli
DEBUG=* npx eleventy
```

## Publish your own copy

The command `npm run build` will generate a copy of the site files in a `_site` directory, which you can deploy with any hosting service.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://gitlab.com/reubenlillie/eleventy-dot-js-blog)

&copy; 2020 by [Reuben L. Lillie](https://twitter.com/reubenlillie)
