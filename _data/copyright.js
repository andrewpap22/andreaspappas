/**
 * @file Contains global copyright data
 * @author Andreas Pappas <andrewpap1997@gmail.com>
 */

// Edit the values for the properties in this file to fit your site.
// You can add as many new properties as you want,
// but you shouldn’t remove any of the ones already included here
// without also editing the files where those properties are used.
// Otherwise, the site will probably break.

/**
 * Global copyright data module
 * @module _data/copyright
 * @see {@link https://www.11ty.dev/docs/data-global/ Global data files in 11ty}
 * @see {@link https://creativecommons.org/ Creative Commons}
 */
export default {
    // Use current year
    year: new Date().getFullYear(),
    holder: '<a href=\"https://twitter.com/AndreasPappas22\">Andreas Pappas</a>',
    license: {
        abbr: 'MIT',
        name: 'The MIT License, Open Source Initiative Approved License',
    },
    url: 'https://opensource.org/licenses/MIT'
}