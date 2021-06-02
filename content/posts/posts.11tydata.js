/**
 * @file Contains data common to all posts, to reduce repetition
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 */

/**
 * Directory data module for posts
 * @module content/posts
 * @see {@link https://www.11ty.dev/docs/data-template-dir/ Template and directory data files in 11ty}
 * @see {@link  https://www.11ty.dev/docs/permalinks/ Permalinks in 11ty}
 */
export default {
  layout: 'layouts/post',
  // Note: The permalink value uses Nunjucks/Liquid syntax;
  // a future version of 11ty may allow for JavaScript template literals
  permalink: '/{{site.en.postsArchive.url}}/{{page.fileSlug}}/index.html',
  tags: [
    'posts'
  ]
}
