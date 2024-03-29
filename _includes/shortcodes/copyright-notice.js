/**
 * @file Defines a shortcode for the copyright notice markup
 * @author Andreas Pappas <andrewpap1997@gmail.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for the copyright notice
 * @module _includes/shortcodes/copyright-notice
 * @param {Object} eleventyConfig 11ty’s Config API
 */
export default eleventyConfig =>

    /**
     * Copyright notice markup
     * @method
     * @name copyrightNotice
     * @param {Object} 11ty’s data object
     * @return {String} The rendered shortcode
     * @example `${this.copyrightNotice(data)}`
     * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
     */
    eleventyConfig.addShortcode('copyrightNotice', data =>
        `<span id="copyright_year">&copy; ${data.copyright.year}</span>
      <span id="copyright_holder">${data.copyright.holder}.</span>
      <span id="copyright_license">
        <a href="${data.copyright.url}"><abbr title="${data.copyright.license.abbr}: ${data.copyright.license.name}">${data.copyright.license.abbr}</abbr></a>.
      </span><br><br>
      <a href="https://andreaspappas.xyz/"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fandreaspappas.xyz&count_bg=%233DC88E&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=%F0%9F%8E%AF+Hits&edge_flat=false"/></a>`
    )