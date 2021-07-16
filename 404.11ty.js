/**
 * @file Defines the chained template for the 404 page
 * @author Andreas Pappas <andrewpap1997@gmail.com>
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */

/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` in JavaScript templates in 11ty}
 */
export var data ={
  locale: 'en',
  title: '🎉 Congratulations! You found the 404 page❗',
  layout: 'layouts/page',
  permalink: '404.html',
  templateEngineOverride: '11ty.js,md',
  eleventyExcludeFromCollections: true
}

/**
 * The content of the 404 page template
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 * @see {@link https://www.11ty.dev/docs/quicktips/not-found/ 404 pages in 11ty}
 */
export function render(data) {
  return `Unless you were looking for this page on purpose, well … the other resource you were actually looking for probably can’t be found at the address you requested.

<img src="https://media.giphy.com/media/g01ZnwAUvutuK8GIQn/giphy.gif" style="width: 100%; max-width: 100%; height: auto;">

### Well you can...

* [😇 Complain to ${data.author.name.givenName} on Twitter](${data.author.social.accounts.find(
  account => account.name === 'Twitter').url})
* [📥 File an issue in GitHub](${data.pkg.bugs.url})
* [🏡 Return to the homepage](${'/'})`
}
