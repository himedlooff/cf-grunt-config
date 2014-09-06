var grunt = require('grunt');

module.exports = {
  main: {
    options: {
      paths: grunt.file.expand('src/**'),
      sourceMap: true,
      sourceMapRootpath: '/'
    },
    files: {
      'demo/static/css/main.css': [
        'src/vendor/cf-concat/cf.less'
      ]
    }
  }
};
