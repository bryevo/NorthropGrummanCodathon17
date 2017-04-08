import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
// import ListViewer from './ListView.js';

const style = {
  textStyle: {
    display: 'flex',
    paddingRight: 15,
    color: 'black',
    marginLeft: 15
  },
  listStyle: {
    backgroundColor: 'lightblue',
    flex: 1,
  },
  viewStyle: {
        paddingTop: 15,
    },
};

class ScrollHandle extends Component {
  constructor() {
  super();
  this.state = {
    sports: ['basketball', 'golf', 'tennis'],
  };
  }
  render() {
    const value = this.state.sports;
      return (
   <ScrollView horizontal="true">
          <Text style={style.textStyle}>{value[0]}</Text>
          <Text style={style.textStyle}>{value[1]}</Text>
          <Text style={style.textStyle}>{value[2]}</Text>
      </ScrollView>
      );
  }
}
export default class HomeScreen extends Component {
  static navigationOptions = { 
    header: {
      title: 'Home Screen',
      style: {
        backgroundColor: '#FFF',
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        shadowOffset: { height: 2 },
      }
    }
  };
  render() {  
    // console.log(this.props);
    // const { navigate } = this.props.navigation;
    return (
      <View>
        <ScrollHandle />
      </View>
    );
  }
}
