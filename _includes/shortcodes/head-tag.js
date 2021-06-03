/**
 * @file Defines a shortcode for the `<head>` markup
 * @author Andreas Pappas <andrewpap1997@gmail.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for the `<head>`
 * @module _includes/shortcodes/head-tag
 * @param {Object} eleventyConfig 11ty’s Config API
 */
export default eleventyConfig =>

    /**
     * HTML `<head>` markup
     * @method
     * @name headTag
     * @param {Object} data 11ty’s data object
     * @return {String} The rendered shortcode
     * @example `${this.headTag(data)}`
     * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
     */
    eleventyConfig.addShortcode('headTag', function(data) {
        return `<head>
      ${this.titleTag(data)}
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${this.authorMeta(data)}
      ${this.description(data)}
      ${this.favicon(data)}
      ${this.socialMeta(data)}
      <style>
        ${this.minifyCSS(this.inlineCSS(data))}
      </style>
      ${this.externalCSS(data)}
    </head>`
    })