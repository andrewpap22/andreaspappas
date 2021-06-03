/**
 * @file Defines the chained template for a collection archive page
 * @author Andreas Pappas <andrewpap1997@gmail.com>
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */

/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` in JavaScript templates in 11ty}
 */
export var data = {
    layout: 'layouts/base'
}

/**
 * The content of the template
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 * @see {@link https://www.11ty.dev/docs/pagination/ Pagination in 11ty}
 */
export function render(data) {
    // using the reversed variable to basically show up to 22222222222 posts per page
    // basically it's a hack to fix the pagination problem with 11ty.js
    // So I'm simply turning off the pagination "by using another hack" inside: 
    // _includes/shortcodes/pagination-nav.js
    var reversed = [...data.collections.posts.slice(-22222222222)].reverse()
    return `<article>
    <header class="article-header">
      <h2>${data.title}</h2>
    </header>

    ${data.content}

    <section style="border:var(--border);padding:var(--base-unit);">
      ${this.archive(data, reversed)}
    </section>  
    <footer>
      ${this.paginationNav(data)}
    </footer>
  </article>`
}