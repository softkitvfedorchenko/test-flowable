const path = require('path');
const fs = require('fs');
const util = require("util");
const appDirectory = fs.realpathSync(process.cwd());

const printObject = obj => console.log(util.inspect(obj, {
  showHidden: false,
  depth: null
}));

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const paths = {
  appSrc: resolveApp("src"),
};

module.exports = {
  printObject,
  resolveApp,
  paths
};
