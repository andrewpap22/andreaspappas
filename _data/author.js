/**
 * @file Contains global data about the site author
 * @author Andreas Pappas <andrewpap1997@gmail.com>
 */

// Edit the values for the properties in this file to fit your site.
// You can add as many new properties as you want,
// but you shouldn’t remove any of the ones already included here
// without also editing the files where those properties are used.
// Otherwise, the site will probably break.

/**
 * Global author data module
 * @module _data/author
 * @see {@link https://www.11ty.dev/docs/data-global/ Global data files in 11ty}
 */
export default {
    name: {
        fullName: 'Andreas Pappas',
        givenName: 'Andreas',
        surname: 'Pappas'
    },
    social: {
        // Add or remove accounts for social media platforms
        accounts: [{
                name: 'GitHub',
                url: 'https://github.com/andrewpap22'
            },
            {
                name: 'GitLab',
                url: 'https://gitlab.com/andrewpap22'
            },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/andrew.dpap/'
            },
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/andreaspappas22/'
            },
            {
                name: 'Messenger',
                url: 'https://m.me/Andreas.FFc'
            },
            {
                name: 'Twitter',
                url: 'https://twitter.com/AndreasPappas22'
            }
        ]
    }
}