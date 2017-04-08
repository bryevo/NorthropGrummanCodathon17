import React from 'react';
import { Text, View, Button } from 'react-native';
import CheckBox from 'react-native-checkbox';

export default class UserInterests extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <View>
                <Text> What are you looking to do?</Text>
                <CheckBox 
                label='Things to do' onChange={(checked) => console.log('I am checked', checked)} />
                <CheckBox 
                label='Food' onChange={(checked) => console.log('I am checked', checked)} />
                <CheckBox 
                label='Movies' onChange={(checked) => console.log('I am checked', checked)} />
                <Button title="Continue" onPress={() => this.props.navigation.navigate('Home')} />
            </View>
        );
    }
}
