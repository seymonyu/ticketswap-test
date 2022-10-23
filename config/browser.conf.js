const {config} = require('./wdio.conf')

config.capabilities = [
    {

    },
  
    
  ]
  
  config.cucumberOpts.tagExpression = '@browser' // pass tag to run tests specific to ios
  
  exports.config = config