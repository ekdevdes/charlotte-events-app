// Internal and External libs
const path = require('path')
const copydir = require('copy-dir')

// Helper function to generate absolute paths from relative paths
const resolve = (dir) => (path.join(__dirname, '..', dir));

// An object that contains the path where out built app js file lives in amex-vue-apps when built and where we want it to live in stratus
const paths = {
  from: {
    app: resolve('./dist/')
  },
  to: {
    app: resolve('./public/js/')
  }
}

// Copy the built app from amex-vue-apps to stratus
try {
  copydir.sync(paths.from.app, paths.to.app);
} catch(err) {
  console.log(`[ERROR] Cannot read file: ${err.path}.\nHave you run 'npm run build' to build the app?`)
}
