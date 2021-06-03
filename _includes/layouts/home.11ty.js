/**
 * @file Defines the chained template for home page
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
 * The content of the home page template
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 * @see {@link https://www.11ty.dev/docs/pagination/ Pagination in 11ty}
 */
export function render(data) {
    var l10n = data.site[data.locale]
    var reversed = [...data.collections.posts.slice(-5)].reverse()
    return `<article>
    <!-- ⬇️  Delete between this line … -->
      ${this.gettingStarted(data)}
    <!-- ⬆️  … and this line -->
    ${data.content}
    <h2>${l10n.postsArchive.headline}</h2>
    <section style="border:var(--border);padding:var(--base-unit);">
      ${this.archive(data, reversed)}
    </section>  
    <p><a href="${l10n.postsArchive.url}">${l10n.postsArchive.prompt}</a></p>
  </article>`
}