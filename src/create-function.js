const replace = require('replace');
const { getComponentName, copyDirAndFiles, boldRedChalk, emptyLog, boldGreenChalk, boldBlueChalk } = require('./utils');
const { isFileAlreadyPresent } = require('./Validators/validator');

const createFunctionFile = (functionName, path, configFile) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const { useCamelCaseName, isTypescript } = configFile;
    const name = getComponentName(functionName, useCamelCaseName);
    const extension = isTypescript ? 'tsx' : 'js';
    const functionDestinationPath = `${path}/${name}.${extension}`;

    if (isFileAlreadyPresent(functionDestinationPath)) {
      boldRedChalk(`[Error]: Aborting, ${name}.${extension} file already exists.`);
      process.exit(1);
    }

    copyDirAndFiles(`${__dirname}/Templates/FunctionTemplate.js`, functionDestinationPath);

    replace({
      regex: 'FunctionTemplate',
      replacement: name,
      paths: [functionDestinationPath],
      recursive: true,
      silent: true,
    });

    emptyLog();
    boldBlueChalk(`[Path]: ${functionDestinationPath}`);
    boldGreenChalk(`${name}.${extension} created.`);
  } catch (err) {
    throw err;
  }
};

module.exports = createFunctionFile;
