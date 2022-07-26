const getAllCommands = () => ({
  fc: {
    description: 'For stateful functional component',
    usage: 'react-construct fc <component_name> <relative_path>',
  },
  h: {
    description: 'For hook file',
    usage: 'react-construct h <component_name> <relative_path>',
  },
  f: {
    description: 'For stateless function file',
    usage: 'react-construct f <file_name> <relative_path>',
  },
  help: {
    description: 'For help',
    usage: 'react-construct help',
  },
  v: {
    description: 'Know your react-construct version',
    usage: 'react-construct v',
  },
});

module.exports = getAllCommands;
