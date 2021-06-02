/**
 * @file Defines a filter to convert a file’s contents to a string
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 */

/*
 *Import Node.js native fs module for interacting with the file system
 */
import { readFileSync } from 'fs'

/**
 * An Eleventy filter for stringifying a file
 * @module _includes/filters/file-to-string
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */
export default eleventyConfig =>

  /**
   * Converts a file’s contents to a string
   * @param {String} file The path of the file to convert
   *                      (relative to the input directory)
   * @return {String} The file’s contents
   * @example `${this.fileToString('css/inline.css')}`
   */
  eleventyConfig.addFilter('fileToString', file =>
    readFileSync(`${file}`).toString()
  )
