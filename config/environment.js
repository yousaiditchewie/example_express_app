var _ = require('lodash');

var localEnvVars = {
  TITLE:      'example_express_app',
  SAFE_TITLE: 'example_express_app'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
