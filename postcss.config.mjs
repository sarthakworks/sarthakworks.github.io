import purgecss from '@fullhuman/postcss-purgecss';

// Safely handle default export for ESM/CJS interop
const purgecssPlugin = typeof purgecss === 'function' ? purgecss : purgecss.default;

export default {
    plugins: [
        purgecssPlugin({
            content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: {
                standard: ['html', 'body', 'show'],
                deep: [/^nav-/, /^navbar-/, /^dropdown-/, /^modal-/, /^btn-/, /^col-/]
            }
        }),
    ]
}
