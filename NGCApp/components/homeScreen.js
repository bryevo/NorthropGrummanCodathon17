import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Button } from 'react-native';
import ListView from './ListView.js';


export default class HomeScreen extends Component {
  static navigationOptions = { 
    header: {
      title: 'Home',
      style: {
        backgroundColor: '#FFF',
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        shadowOffset: { height: 2 },
      }
    }
  };
  componentDidMount() {
            /* reference to our database*/
            const rootRef = firebase.database().ref();
            /* assigns the a reference to one of the children(branch) of the database*/
                rootRef.on('value', snap => {
                this.setState({
                    // percentage: snap.child('Parking Lot 12').val(),
                });
            });
  }
  render() {
    const { navigate } = this.props.navigation;
    // console.log(this.props);
    return (
      <View>
        <ListView />
        <Button onPress={() => navigate('PScreen')} title="Parking Structure 12" />
      </View>
    );
  }
}
