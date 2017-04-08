'use strict';
import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, AsyncStorage, Text, View } from 'react-native';

const ACCESS_TOKEN = 'access_token';

export default class Root extends Component {
moveRegister(){
    this.props.navigation.navigate('Register');
}
moveLogin(){
    this.props.navigation.navigate('Login');
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Friend </Text>
        <TouchableHighlight navigate = {this.props.navigation} onPress={() => this.moveRegister()}  style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.moveLogin()}style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 180
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  title: {
    fontSize: 25,
    marginBottom: 15
  }
});

