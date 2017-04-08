import React from 'react';
import { View, Text } from 'react-native';

const FavScreen = () => {
    const { viewStyle, textStyle } = styles;
    return (
        <View style={viewStyle} >
            <Text style={textStyle}>This is the favorite screen</Text>
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
export default FavScreen;
