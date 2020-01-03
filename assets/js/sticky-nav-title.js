/* eslint-env browser */

/**
 * Nav/Title replacement
 * Used on invividual post pages, displays the post title in place of the nav
 * bar when scrolling past the title
 *
 * Usage:
 * ```
 * Casper.stickyTitle({
 *     navSelector: '.site-nav-main',
 *     titleSelector: '.post-full-title',
 *     activeClass: 'nav-post-title-active'
 * });
 * ```
 */

// removed scroll navbar activity on posts. This was causing main navbar elements to be hidden on scroll
