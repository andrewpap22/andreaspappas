/**
 * @file Defines a shortcode for the page footer markup
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for the page footer
 * @module _includes/shortcodes/site-footer
 * @param {Object} eleventyConfig 11ty’s Config API
 */
export default eleventyConfig =>

  /**
   * The page footer markup
   * @method
   * @name siteFooter
   * @param {Object} data 11ty’s data object
   * @return {String} The rendered shortcode
   * @example `${this.siteFooter(data)}`
   * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
   */
  eleventyConfig.addShortcode('siteFooter', function (data) {
    return `<footer id="site_footer">
        <p>${this.editThisPage(data)}</p>
        <p>${this.copyrightNotice(data)}</p>
        <p>${this.colophon(data)}</p>
      </footer>`
  })
