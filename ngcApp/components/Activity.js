import React, { Component } from 'react';
import { View, ListView, Text, TouchableHighlight, Image, ScrollView } from 'react-native';

export default class Activity extends React.Component {
    
    render() {
        const data = this.props.navigation.state.params.ourSHIT;
        let info = data.highlightsHtml.slice(3,data.highlightsHtml.length-4);
        console.log(data);
        return (
            <View style={style.viewStyle} >
                <Text style={style.textStyle}>{data.title}</Text>
                <Image style={style.imgStyle} source={{ uri: data.grid4ImageUrl }}/>
                <Text style={style.infoStyle}>{info}</Text>
            </View>
        );
    }
}
const style = {
    viewStyle: {
        backgroundColor: '#122f5e',
    },
    textStyle: {
        color: 'white',
    },
    imgStyle: {
        justifyContent: 'center',
        alignContent: 'flex-start',
        width: 300,
        height: 300,
        marginTop: 30,
        marginLeft: 30,
    },
    infoStyle: {
        marginTop: 15,
        fontStyle: 'italic',
    }

};
