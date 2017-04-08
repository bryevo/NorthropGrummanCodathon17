import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';

const HomeScreen = () => {
    const { viewStyle, textStyle } = styles;
    return (
        <View style={viewStyle} >
            <Text style={textStyle}>This is a ListView</Text>
        </View>
    );
};

const FavScreen = () => {
    const { viewStyle, textStyle } = styles;
    return (
        <View style={viewStyle} >
            <Text style={textStyle}>This is a ListView</Text>
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
const MainScreenNavigator = TabNavigator({
  Recent: { screen: HomeScreen },
  All: { screen: FavScreen },
});