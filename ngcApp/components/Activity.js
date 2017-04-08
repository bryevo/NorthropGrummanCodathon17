import React, { Component } from 'react';
import { View, ListView, Text, TouchableHighlight, Image, ScrollView } from 'react-native';

export default class Activity extends React.Component {
    
    render() {
        const data = this.props.navigation.state.params.ourSHIT;
        let info = data.highlightsHtml.slice(3,data.highlightsHtml.length-4);
        console.log(data);
        return (
            <View>
                <Text>{data.title}</Text>
                <Image style={style.imgStyle} source={{ uri: data.grid4ImageUrl }}/>
                <Text>{info}</Text>
            </View>
        );
    }
}
const style = {
    imgStyle: {
    justifyContent: 'center',
    alignContent: 'flex-start',
    width: 300,
    height: 300,
    marginTop: 30,
    }
};