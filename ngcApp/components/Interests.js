import React from 'react';
import { Text, View, Button } from 'react-native';
import CheckBox from 'react-native-checkbox';
import firebase from 'firebase';

class InterestBox extends React.Component {
       checkInterest() {
           this.props.exportFunction(this.props.interest);
       }
       render() {
        return (
            <View>
            <Text>{this.props.interest}</Text>
                <CheckBox onChange={() => this.checkInterest()} />
            </View>
        );
       }
} 
export default class UserInterests extends React.Component {
    constructor() {
        super();
        this.state = {
            interests: ['Things', 'Food', 'Entertainment', 'Beauty', 'Travel', 'Electronics'],
            interestClicked: []
        };
    const rootref = firebase.database().ref();
        // const firebasedb = new firebase('https://ngc-app-2017.firebaseio.com/');
    }
    interestClicked(interest) {
        console.log(interest);
        const array = this.state.interests.push(interest);
        this.setState({ interestClicked: array });
    }


    writeUserData(email, password, name, interestobj) {
    // const childref = rootref.child.ref
    firebase.database().ref().child(name).set({
        username: name,
        email: email,
        password: password,
        interest: [interestobj]
    });
    }   

    exportInterest() {
        const fullInfo = this.props.navigation.state.params.profInfo;
        console.log('This is this.props');
        console.log(this.props);
        this.writeUserData(fullInfo.email, fullInfo.password, fullInfo.name, this.state.interestClicked);
        this.props.navigation.navigate('Dashboard', { clickedInterests: this.state.interestClicked });
    }
    render() {
        console.log('This is this.props.navigation');
        console.log(this.props.navigation);
        return (
            <View navigation={this.props.navigation} >
                <Text> What are you looking to do?</Text>
                <InterestBox label={this.state.interests[0]} interest={this.state.interests[0]} exportFunction={(data) => this.interestClicked(data)} />
                <InterestBox label={this.state.interests[1]}interest={this.state.interests[1]} exportFunction={(data) => this.interestClicked(data)} />
                <InterestBox label={this.state.interests[2]}interest={this.state.interests[2]} exportFunction={(data) => this.interestClicked(data)} />
                <InterestBox label={this.state.interests[3]}interest={this.state.interests[3]} exportFunction={(data) => this.interestClicked(data)} />
                <InterestBox label={this.state.interests[4]}interest={this.state.interests[4]} exportFunction={(data) => this.interestClicked(data)} />
                <InterestBox label={this.state.interests[5]}interest={this.state.interests[5]} exportFunction={(data) => this.interestClicked(data)} />
                <Button title="Continue" onPress={() => this.exportInterest()} />
            </View>
        );
    }
}
