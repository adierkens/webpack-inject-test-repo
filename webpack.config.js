const InjectPlugin = require('webpack-inject-plugin').default;
const config = {

    entry: './entry.js',
    mode: 'development',
    plugins: [
      new InjectPlugin(function() {
        return `console.log('sup');`;
      }),
    ]
};


module.exports = config;
