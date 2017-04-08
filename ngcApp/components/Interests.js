import React from 'react';
import { Text, View, Button } from 'react-native';
import CheckBox from 'react-native-checkbox';

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
    }
    interestClicked(interest) {
        console.log(interest);
        const array = this.state.interests.push(interest);
        this.setState({ interestClicked: array });
    }
    exportInterest() {
        this.props.navigation.navigate('Dashboard', { clickedInterests: this.state.interestClicked });
    }
    render() {
        // console.log(this.props);
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
