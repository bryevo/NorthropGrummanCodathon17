import React from 'react';
import { Text, View } from 'react-native';
import CheckBox from 'react-native-checkbox';

export default class UserInterests extends React.Component {
    render() {
        return (
            <View>
                <Text> What are you looking to do?</Text>
                <CheckBox label='Concerts' checked="true" onChange={(checked) => console.log('I am checked', checked)} />
            </View>
        );
    }
}
