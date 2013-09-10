var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var initAngularScenario = function(files) {
  files.unshift(createPattern(__dirname + '/adapter.js'));

  for (var i = 0; i < files.length; i++) {
	if (files[i].pattern.match(/angular-scenario\.js/i)) {
	  files.unshift(files[i]);
	  files.splice(i + 1, 1);
	}
  }
};

initAngularScenario.$inject = ['config.files'];

module.exports = {
  'framework:ng-scenario': ['factory', initAngularScenario]
};