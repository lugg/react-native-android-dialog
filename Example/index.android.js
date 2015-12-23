/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var DialogAndroid = require('react-native-android-dialog');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} = React;

var Example = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.showDialog}>
          <Text style={styles.label}>
            Click to show dialog
          </Text>
        </TouchableOpacity>
      </View>
    );
  },

  showDialog: function() {
    DialogAndroid.show('Dialog test', 'Hello world');
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    textAlign: 'center',
    marginBottom: 16,
  },
});

AppRegistry.registerComponent('Example', () => Example);
