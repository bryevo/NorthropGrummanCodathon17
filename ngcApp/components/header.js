import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    console.log(props);
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.myHeaderText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingTop: 15,
        height: 60,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 5 },
        elevation: 5,   //shadow for android
        position: 'relative'
        },
    textStyle: {
        color: 'black',
        fontSize: 20,
    }
};
export default Header;
