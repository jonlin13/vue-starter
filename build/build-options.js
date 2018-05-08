var argv = require('yargs')
// Use YARGS to offer CLI build options:
// OPTION 1. For the staged development environment (WPengine: cjm2017.wpengine.com)
// OPTION 2. For the production environment (WPengine: cleanjobsmidwest.com)
// ---------------------------------------------------------------------------------
// We can use these alternatives below to set custom environment variables
// for different WPengine installations.
// Initial need is to switch out API_BASE_URL with whatever installation a new build
// is created for.
// ---------------------------------------------------------------------------------
// USAGE: Variables are set via NPM scripts in package.json
// ---------------------------------------------------------------------------------
var build_options = () => {

  var buildValue;

  argv
  .usage('$0 <cmd> [args]')
  .command('whatBuild [build]', 'Choose the target environment to deploy.', {
    build: {
      default: 'PRE',
      describe: 'Choose the target environment to deploy.'
    }
  }, function (argv) {
    if (argv.build === 'PRODUCTION') {

      console.log('Building a fresh distribution for production...')
      buildValue = 'PRODUCTION'

    } else if (argv.build === 'STAGING') {

      console.log('Building a fresh distribution for staging...')
      buildValue = 'STAGING'

    } else {
      console.log('Apologies, that option is not available.')
      buildValue = null
    }
  })
  .help()
  .argv

  return buildValue

}

module.exports = {
  build_options: build_options
}
