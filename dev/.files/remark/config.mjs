/**
 * Remark config file.
 *
 * Remark is not aware of this config file's location.
 *
 * @note PLEASE DO NOT EDIT THIS FILE!
 * @note This entire file will be updated automatically.
 * @note Instead of editing here, please review <https://github.com/clevercanyon/skeleton>.
 *
 * @see https://github.com/remarkjs/remark/tree/main/packages/remark-stringify#options
 */

import pluginDirective from 'remark-directive';
import pluginFrontmatter from 'remark-frontmatter';
import pluginGemoji from 'remark-gemoji';
import pluginGFM from 'remark-gfm';
import remarkLint from 'remark-lint';
import presetLintRecommended from 'remark-preset-lint-recommended';
import presetPrettier from 'remark-preset-prettier';
import pluginSmartyPants from 'remark-smartypants';
import pluginTableOfContents from 'remark-toc';
import pluginAlerts from './plugins/alerts/index.mjs';
import pluginDirectives from './plugins/directives/index.mjs';

/**
 * Defines Remark configuration.
 */
export default async () => {
    /**
     * Composition.
     */
    return {
        /**
         * Prettier enforces a few things; e.g., `*` for strong, `_` for emphasis. Therefore, our remark configuration
         * must align itself with prettier; e.g., we would prefer to use `*` for emphasis, but prettier disagrees.
         */
        settings: {
            // Headings.
            setext: false, // Use underlined headings? We prefer ATX headings.
            closeAtx: false, // ATX headings use `#`. We prefer not to close them.

            // Strong, emphasis. This simply configures our preferred strong/emphasis markers.
            strong: '*', // Preferred option, but doubles always work; e.g., `**bold**` or `__bold__`.
            emphasis: '_', // Preferred option, but singles always work; e.g., `_italic_` or `*italic*`.

            // List items.
            bullet: '-', // Marker to use for unordered list items.
            bulletOther: '*', // Alternate marker for unordered list items.
            bulletOrdered: '.', // Marker to use for ordered/numbered list items.
            incrementListMarker: true, // Auto-increment ordered/numbered list items?
            listItemIndent: 'tab', // i.e., 4 spaces. This matches what prettier does also.

            // Fenced code blocks.
            fence: '`', // Marker for fenced code blocks.
            fences: false, // When `false`, only use `<pre><code>` if there is a language.
            // If there is no language defined, simply output a `<pre>` tag, not `<pre><code>`.

            // Horizontal rules.
            rule: '-', // Marker to use for horizontal lines.
            ruleRepetition: 3, // The number of markers needed to produce an hr.
            ruleSpaces: true, // Add vertical line break padding before/after horizontal lines?

            // Misc settings.
            quote: '"', // Quote to use around titles.
            resourceLink: false, // Always use resource links?
            tightDefinitions: false, // Join definitions w/o a blank line?
        },
        plugins: [
            [remarkLint], // Remark core linter.
            [presetLintRecommended], // Linting basics.
            [presetPrettier], // Removes conflicting lint rules.

            [pluginFrontmatter], // Frontmatter.
            [pluginGFM, { singleTilde: false }], // GFM features.
            [pluginGemoji], // GFM-style emojis using `:shortcodes:`.
            [pluginSmartyPants], // (em dash) `--` to `—`, quotes, etc.
            [pluginDirective], // Custom directives using `remark-directive`; {@see https://o5p.me/0fakce}.
            [pluginAlerts], // Generates alerts using remark directives. Ultimately powered by `remark-directive`.
            [pluginDirectives], // Generates HTML using remark directives. Ultimately powered by `remark-directive`.
            [pluginTableOfContents, { heading: 'Table of Contents', prefix: '~' }],

            // Disable this rule, as GFM explicitly allows this.
            ['remark-lint-no-literal-urls', false],
        ],
    };
};
