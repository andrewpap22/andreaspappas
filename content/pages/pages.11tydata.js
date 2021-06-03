/**
 * @file Contains data common to all pages, to reduce repetition
 * @author Andreas Pappas <andrewpap1997@gmail.com>
 */

/**
 * Directory data module for pages
 * @module content/pages
 * @see {@link https://www.11ty.dev/docs/data-template-dir/ Template and directory data files in 11ty}
 * @see {@link  https://www.11ty.dev/docs/permalinks/ Permalinks in 11ty}
 */
export default {
    layout: 'layouts/page',

    eleventyComputed: {
        permalink: data => `/${data.page.fileSlug}/index.html`
    },
    tags: [
        'pages'
    ]
}