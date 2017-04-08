import React from 'react';
import { View, Text } from 'react-native';

const ListView = () => {
    const { viewStyle, textStyle } = styles;
    return (
        <View style={viewStyle} >
            <Text style={textStyle}>Sports</Text>
            <Text style={textStyle}>Music</Text>
            <Text style={textStyle}>Local</Text>
            <Text style={textStyle}>Food</Text>
        </View>
    );
};
const styles = {
    viewStyle: {
        paddingTop: 15,
    },
    textStyle: {
        color: 'black',
        marginLeft: 15
    }
};
export default ListView;
