
// /** @type {import('postcss-load-config').Config} */
// export default {
//   // Pass the imported functions to the plugins array.
//   // This satisfies the PostCSS requirement for valid plugins.
//   plugins: [
//     tailwindcss,
//     autoprefixer,
//   ],
// }
export default {
  plugins: {
    // 1. You must use the new package path: '@tailwindcss/postcss'
    '@tailwindcss/postcss': {}, 
    
    // 2. Keep standard plugins like autoprefixer
    'autoprefixer': {},
  },
}
// export default {
//   // Use the object syntax to list plugins, which is highly compatible 
//   // with PostCSS loaders in Vite environments.
//   plugins: {
//     // This is the main Tailwind plugin
//     'tailwindcss': {},
    
//     // Autoprefixer is necessary for cross-browser compatibility
//     'autoprefixer': {},
//   },
// }