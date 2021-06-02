/**
 * @file Imports shortcodes and configures them with 11ty (.eleventy.js)
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 */

// Import shortcodes to include
import archive from './archive.js'
import author from './author.js'
import authorMeta from './author-meta.js'
import colophon from './colophon.js'
import copyrightNotice from './copyright-notice.js'
import cssRoot from './css-root.js'
import description from './description.js'
import editThisPage from './edit-this-page.js'
import externalCSS from './external-css.js'
import favicon from './favicon.js'
import gettingStarted from './getting-started.js'
import headTag from './head-tag.js'
import inlineCSS from './inline-css.js'
import nav from './nav.js'
import pageDate from './page-date.js'
import paginationNav from './pagination-nav.js'
import siteFooter from './site-footer.js'
import siteHeader from './site-header.js'
import socialMeta from './social-meta.js'
import titleTag from './title-tag.js'

/**
 * A loader module for shortcodes
 * @module _includes/shortcodes
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.dev/docs/config/ Configuring 11ty}
 * @see {@link https://www.11ty.dev/docs/shortcodes/ Shortcodes in 11ty}
 */
export default function (eleventyConfig) {

  // Function calls to shortcodes to include
  archive(eleventyConfig)
  author(eleventyConfig)
  authorMeta(eleventyConfig)
  colophon(eleventyConfig)
  copyrightNotice(eleventyConfig)
  cssRoot(eleventyConfig)
  description(eleventyConfig)
  editThisPage(eleventyConfig)
  externalCSS(eleventyConfig)
  favicon(eleventyConfig)
  gettingStarted(eleventyConfig)
  headTag(eleventyConfig)
  inlineCSS(eleventyConfig)
  nav(eleventyConfig)
  pageDate(eleventyConfig)
  paginationNav(eleventyConfig)
  siteFooter(eleventyConfig)
  siteHeader(eleventyConfig)
  socialMeta(eleventyConfig)
  titleTag(eleventyConfig)
  
  return
}
