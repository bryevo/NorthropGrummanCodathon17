import React from 'react';
import { Text, View, Button } from 'react-native';
import CheckBox from 'react-native-checkbox';
import firebase from 'firebase';

class InterestBox extends React.Component {
    checkInterest(checked, likes) {
            return this.props.exportFunction(checked, likes);
        }
        render() {
            const value = this.props.interests;
            return (<CheckBox label={value} onChange={(checked) => this.checkInterest(checked, value)} />);
        }
}

export default class UserInterests extends React.Component {
    constructor() {
        super();
        this.state = {
            interests: ['Things to do', 'Food', 'Entertainment', 'Sports', 'Travel', 'Electronics'],
            interestClicked: []
        };
    }
    interestClicked(check, interest) {
        const likeArray = this.state.interestClicked.slice();
        if (!check) {
            likeArray.push(interest);   
            this.setState({ interestClicked: likeArray });
        } else {
            const index = likeArray.indexOf(interest);
            likeArray.splice(index, 1);
            this.setState({ interestClicked: likeArray });
        }
    }

    writeUserData(email, password, name, interestobj) {
        firebase.database().ref().child(name).set({
            username: name,
            email: email,
            password: password,
            interest: interestobj
        });
    }

    exportInterest() {
        const fullInfo = this.props.navigation.state.params.profInfo;
        this.writeUserData(fullInfo.email, fullInfo.password, fullInfo.name, this.state.interestClicked);
        this.props.navigation.navigate('Dashboard', { clickedInterests: this.state.interestClicked });
    }
    render() {
        console.log('Our final this.state');
        console.log(this.state);
        return (
            <View navigation={this.props.navigation} >
                <Text> What are you looking to do?</Text>
                {this.state.interests.map(likes => <InterestBox interests={likes} exportFunction={(check, data) => this.interestClicked(check, data)} />)}
                <Button title="Continue" onPress={() => this.exportInterest()} />
            </View>
        );
    }
}


