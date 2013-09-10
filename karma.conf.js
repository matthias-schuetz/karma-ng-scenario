module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      // 'path/to/your/angular-scenario.js',
      'src/*.js',
      'test/*.js'
    ],

    browsers: process.env.TRAVIS ? ['Firefox'] : ['Chrome'],

    autoWatch: true
  });
};
