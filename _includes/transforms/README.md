# eleventy-Blog/\_includes/transforms

In Eleventy, [transforms](https://www.11ty.dev/docs/config/#transforms) can modify content after templates have been processed. Whereas [filters](https://www.11ty.dev/docs/filters/) have to be called explicitly within other files, transforms run automatically.

The [`index.js`](https://github.com/andrewpap22/andreaspappas/blob/main/_includes/transforms/index.js) file here is used to configure transforms in this directory with Eleventy (in [`.eleventy.js`](https://github.com/andrewpap22/andreaspappas/blob/main/.eleventy.js), loaded in [`_includes/index.js`](https://github.com/andrewpap22/andreaspappas/blob/main/_includes/index.js)).
