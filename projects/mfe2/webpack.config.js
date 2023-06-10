const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

   name: 'mfe2',
  exposes: {  // List of modules that the application will export as remote to another application              
    './RemoteMfe2Module': './src/app/remote-mfe2/remote-mfe2.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
