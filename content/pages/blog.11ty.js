// JavaScript-ified ./content/pages/archive.11ty.js
/**
 * @file Defines the chained layout for the archive page
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */

/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` in JavaScript templates in 11ty}
 */
export var data = {
    title: '📔 Yet another Blog!?',
    navTitle: '📔 Blog',
    tags: 'nav',
    weight: 3,
    layout: 'layouts/archive',
    templateEngineOverride: '11ty.js',
    pagination: {
        data: 'collections.posts',
        size: 3,
        alias: 'posts',
        reverse: true,
    },
    eleventyComputed: {
        permalink: data => `${data.site[data.locale].postsArchive.url}/index.html`
    }
}

/**
 * The archive page content
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 */
export function render(data) {
    return `<!-- ${data.page.inputPath} -->
  <p>Welcome to my Blog landing page. 🛬</p>
  <p>Here you will find the list of all my blog posts!</p> 
  <p>Enjoy! 😎</p>
`
}