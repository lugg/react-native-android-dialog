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
    title: string,
    message: string,
  ): void {
    NativeDialog.show(title, message);
  }
};

module.exports = DialogAndroid;
