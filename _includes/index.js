/**
 * @file Imports modules and configures them with 11ty (.eleventy.js)
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 */

// Import modules to include
import filters from './filters/index.js'
import shortcodes from './shortcodes/index.js'
import transforms from './transforms/index.js'

/**
 * A loader module for includes
 * @module _includes/index
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.dev/docs/config/ Configuring 11ty}
 */
export default function (eleventyConfig) {

  // Function calls to modules to include
  filters(eleventyConfig)
  shortcodes(eleventyConfig)
  transforms(eleventyConfig)

  return
}
