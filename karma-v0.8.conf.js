files = [
  JASMINE,
  JASMINE_ADAPTER,
  // 'path/to/your/angular-scenario.js',
  'src/*.js',
  'test/**/*.js'
];

browsers = process.env.TRAVIS ? ['Firefox'] : ['Chrome'];

autoWatch = true;
