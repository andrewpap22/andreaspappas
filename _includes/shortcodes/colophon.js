/**
 * @file Defines a shortcode for the colophon markup
 * @author Andreas Pappas <andrewpap1997@gmail.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for the colophon
 * @module _includes/shortcodes/colophon
 * @param {Object} eleventyConfig 11ty’s Config API
 */
export default eleventyConfig =>

    /**
     * The colophon markup
     * @method
     * @name colophon
     * @param {Object} data 11ty’s data object
     * @return {String} The rendered shortcode
     * @example `${this.colophon(data)}`
     * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
     */
    eleventyConfig.addShortcode('colophon', data => {
        var l10n = data.colophon[data.locale]
        return `<a href="${data.pkg.homepage}">${data.pkg.name} ${data.pkg.version}</a><br>
      ${l10n.generator} ${l10n.host}<br>
      ${l10n.languages}<br>
      ${l10n.git}`
    })