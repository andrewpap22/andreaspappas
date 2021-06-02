/**
 * @file Imports filters and configures them with 11ty (.eleventy.js)
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 */

// Import filters to include
import fileToString from './file-to-string.js'
import minifyCSS from './minify-css.js'
import minifyJS from './minify-js.js'

/**
 * A loader module for filters
 * @module _includes/filters
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.dev/docs/config/ Configuring 11ty}
 * @see {@link https://www.11ty.dev/docs/filters/ Filters in 11ty}
 */
export default function (eleventyConfig) {

  // Function calls to filters to include
  fileToString(eleventyConfig)
  minifyCSS(eleventyConfig)
  minifyJS(eleventyConfig)

  return
}
