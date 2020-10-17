const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Madhuvan/Desktop/git/Project/magic-decors/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/Madhuvan/Desktop/git/Project/magic-decors/src/pages/about.js"))),
  "component---src-pages-checkout-js": hot(preferDefault(require("/Users/Madhuvan/Desktop/git/Project/magic-decors/src/pages/checkout.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/Madhuvan/Desktop/git/Project/magic-decors/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Madhuvan/Desktop/git/Project/magic-decors/src/pages/index.js"))),
  "component---src-pages-shop-js": hot(preferDefault(require("/Users/Madhuvan/Desktop/git/Project/magic-decors/src/pages/shop.js"))),
  "component---src-templates-magicdecor-template-js": hot(preferDefault(require("/Users/Madhuvan/Desktop/git/Project/magic-decors/src/templates/magicdecorTemplate.js")))
}

