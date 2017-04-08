import React from 'react';
import { View, Text } from 'react-native';

export default class ListView extends React.Component {
    render() {
        console.log(this.props);
        const { viewStyle, textStyle } = styles;
        return (
            <View style={viewStyle} >
                <Text style={textStyle}>Music</Text>
                <Text style={textStyle}>Nearby</Text>
                <Text style={textStyle}>Todo</Text>
            </View>
        );
    }
}
const styles = {
    viewStyle: {
        paddingTop: 15,
    },
    textStyle: {
        color: 'black',
        marginLeft: 15
    }
};
