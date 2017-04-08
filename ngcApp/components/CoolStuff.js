import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';

export default class CoolStuff extends Component {
    static navigationOptions = {
        header: {
            title: 'This is navigation header for Cool Stuff',
            style: {
                backgroundColor: '#FFF',
                shadowOpacity: 0.2,
                shadowRadius: 1.5,
                shadowOffset: { height: 2 },
            }
        }
    };
        //Initialize state
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
    /* reference to our database*/
    const rootRef = firebase.database().ref();
    /* assigns the a reference to one of the children(branch) of the database*/
        rootRef.on('value', snap => {
        this.setState({
            percentage: snap.child('Data').val(),
        });
    });
  }
    render() {
        console.log(this.props);
        return (
            <View>
                <Text >{this.state.obj}</Text>
            </View>
        );
    }
}
