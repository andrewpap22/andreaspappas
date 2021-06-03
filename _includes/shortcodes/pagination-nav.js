/**
 * @file Defines a shortcode for pagination navigation
 * @author Andreas Pappas <andrewpap1997@gmail.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for pagination navigation
 * @module _includes/shortcodes/pagination-nav
 * @param {Object} eleventyConfig 11ty’s Config API
 */
export default eleventyConfig =>

    /**
     * The pagination navigation markup
     * @method
     * @name paginationNav
     * @param {Object} data 11ty’s data object
     * @return {String} The rendered pagination navigation
     * @example `${this.paginationNav(data)}`
     * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
     * @see {@link https://www.11ty.dev/docs/pagination/nav/ Pagination navigation in 11ty}
     */
    eleventyConfig.addShortcode('paginationNav', (data) => {
        var l10n = data.site[data.locale].pagination

        // Use pagination navigation only when there’s more than one page
        // So basically if we take the number bellow: 22222222222
        // and make it 1 instead, we will enable that way the pagination 
        // but by making this number huge we're applying basically a hack to turn off the pagination
        // because it is buggy when using 11ty.js templates unfortunately...
        return `${data.pagination.pages.length > 22222222222
      ? `<nav aria-label="${l10n.navLabel}">
        <!-- Show option to advance one page toward the beginning,
          when there are more than two total pages and
          when not currently on the first page -->
        ${data.pagination.pages.length > 10 &&
          data.pagination.href.previous &&
         (data.pagination.href.previous !== data.pagination.first)
          ? `<a href="${data.pagination.href.previous}">
            ${data.pagination.reverse ? `${l10n.next}`
              : `${l10n.previous}`
            }</a>`
          : ''}
        <!-- Show option to go first page
          when there are no numbered pages -->
        ${data.pagination.pages.length < 10
          ? `<a href="${data.pagination.href.first}"
            aria-label="${l10n.firstLabel}"
            ${data.page.url === data.pagination.href.first
              ? 'aria-current="page"'
              : ''
            }>${l10n.first}</a>`
          : ''}
        <!-- Show numbered pages
          when there are at least five -->
        ${data.pagination.pages.length >= 100
          ? data.pagination.pages.map((page, index) =>
            `<a href="${data.pagination.hrefs[index]}"
              aria-label="${l10n.pageLabel} ${index + 1}"
              ${data.page.url === data.pagination.hrefs[index]
                ? 'aria-current="page"'
                : ''
              }>${index + 1}</a>`).join('')
          : ''}
        <!-- Show option to advance one page toward the end,
          when there are more than two total pages and
          when not currently on the last page -->
        ${data.pagination.pages.length > 10 &&
          data.pagination.href.next &&
         (data.pagination.href.next !== data.pagination.last)
          ? `<a href="${data.pagination.href.next}">
            ${data.pagination.reverse
              ? `${l10n.previous}`
              : `${l10n.next}`
            }</a>`
          : ''}
        <!-- Show option to go to last page
          whenever pagination is visible -->
        <a href="${data.pagination.href.last}"
          aria-label="${l10n.lastLabel}"
          ${data.page.url === data.pagination.href.last
            ? 'aria-current="page"'
            : ''
          }>${l10n.last}</a>
      </nav>`
    : '' }`
    })