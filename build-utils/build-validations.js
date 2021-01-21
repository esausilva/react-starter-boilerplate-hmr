const chalk = require('chalk');

const ERR_NO_ENV_FLAG = chalk.red(
  `You must pass an '--env [dev|prod]' flag into your build for webpack to work!`
);

module.exports = { ERR_NO_ENV_FLAG };
