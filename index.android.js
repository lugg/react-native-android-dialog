/**
 * @providesModule DialogAndroid
 */

'use strict';

/**
 * This exposes the native DialogAndroid module in JS.
 */

var React = require('react-native');
var NativeDialog = React.NativeModules.DialogAndroid;

var DialogAndroid = {
  show: function (
    message: string,
  ): void {
    NativeDialog.show(message);
  }
};

module.exports = DialogAndroid;
