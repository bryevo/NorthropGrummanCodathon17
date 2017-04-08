import React, { Component } from 'react';
import { View, ListView, Text, TouchableHighlight, Image, ScrollView } from 'react-native';
import gpnFood from '../groupon_food.json';
import gpnEnt from '../groupon_music.json';
import gpnSports from '../groupon_sports.json';
import gpnTodo from '../groupon_todo.json';
import gpnBeauty from '../groupon_beauty.json';

// import ListViewer from './ListView.js';

const style = {
  titleStyle: {
    color: 'white',
    fontSize: 26,
    marginBottom: 15,
    textAlign: 'center',
    padding: 10
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    width: 200,
    marginRight: 30,
  },
  listviewStyle: {
    marginBottom: 15,
    marginRight: 15,
    marginLeft: 15
  },
  viewStyle: {
        paddingTop: 15,
        backgroundColor: '#122f5e',
    },
  imgStyle: {
    justifyContent: 'center',
    alignContent: 'flex-start',
    width: 150,
    height: 150,
    marginTop: 30,
  },
  viewScroll: {
    backgroundColor: '#2C3539',
  }
};

class GrouponComponent extends Component {
  constructor() {
  super();
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  this.state = {
    food: ds.cloneWithRows(gpnFood.deals),
    entertainment: ds.cloneWithRows(gpnEnt.deals),
    sports: ds.cloneWithRows(gpnSports.deals),
    todo: ds.cloneWithRows(gpnTodo.deals),
    beauty: ds.cloneWithRows(gpnBeauty.deals)
  };
}
handleActivity(data) {
  console.log(data);
  this.props.state = data;
  this.props.navigation.navigate('Activity', { ourSHIT: data });
}
  render() {
    return (
      <ScrollView>

          <Text style={style.titleStyle} >Things To Do</Text>
          <View style={style.viewScroll} >
          <ListView style={style.listviewStyle} showsHorizontalScrollIndicator={false} horizontal={true} dataSource={this.state.todo}
          renderRow={(objData) => <TouchableHighlight onPress={() => {this.handleActivity(objData)}} >
          <Text style={style.textStyle}>{objData.title + "\n"}<Image style={style.imgStyle} source={{uri: objData.grid4ImageUrl }}>
          </Image></Text></TouchableHighlight>}></ListView></View>
          
          <Text style={style.titleStyle} >Entertainment</Text>
          <View style={style.viewScroll} >
          <ListView style={style.listviewStyle} showsHorizontalScrollIndicator={false} horizontal={true} dataSource={this.state.entertainment}
          renderRow={(objData) => <TouchableHighlight onPress={() => {this.handleActivity(objData)}} >
          <Text style={style.textStyle}>{objData.title + "\n"}<Image style={style.imgStyle} source={{uri: objData.grid4ImageUrl }}>
          </Image></Text></TouchableHighlight>}></ListView></View>

          <Text style={style.titleStyle} >Food</Text>
          <View style={style.viewScroll} >
          <ListView style={style.listviewStyle} showsHorizontalScrollIndicator={false} horizontal={true} dataSource={this.state.food}
          renderRow={(objData) => <TouchableHighlight onPress={() => {this.handleActivity(objData)}} >
          <Text style={style.textStyle}>{objData.title + "\n"}<Image style={style.imgStyle} source={{uri: objData.grid4ImageUrl }}>
          </Image></Text></TouchableHighlight>}></ListView></View>

          <Text style={style.titleStyle} >Sports</Text>
          <View style={style.viewScroll} >
          <ListView style={style.listviewStyle} showsHorizontalScrollIndicator={false} horizontal={true} dataSource={this.state.sports}
          renderRow={(objData) => <TouchableHighlight onPress={() => {this.handleActivity(objData)}} >
          <Text style={style.textStyle}>{objData.title + "\n"}<Image style={style.imgStyle} source={{uri: objData.grid4ImageUrl }}>
          </Image></Text></TouchableHighlight>}></ListView></View>

          

          
        </ScrollView>
    );
  }
}

class ScrollHandle extends Component {
  render() {
      return (
        <View>
          <GrouponComponent navigation={this.props.navigation} />  
        </View>
      );
  }
}

export default class HomeScreen extends Component {
  static navigationOptions = { 
    header: {
      title: 'Local Suggestions',
      style: {
        backgroundColor: '#FFF',
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        shadowOffset: { height: 2 },
      }
    }
  };
  render() {  
    return (
      <View style={style.viewStyle}>
        <ScrollHandle navigation={this.props.navigation} />
      </View>
    );
  }
}
