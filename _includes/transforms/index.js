/**
 * @file Imports transforms and configures them with 11ty (.eleventy.js)
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 */

// Import transforms to include
import minifyHTML from './minify-html.js'

/**
 * A loader module for transforms
 * @module _includes/transforms
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.dev/docs/config/ Configuring 11ty}
 * @see {@link https://www.11ty.dev/docs/config/#transforms Transforms in 11ty}
 */
export default function (eleventyConfig) {

  // Function calls to transforms to include
  minifyHTML(eleventyConfig)

  return
}
