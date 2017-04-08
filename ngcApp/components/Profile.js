import React from 'react';
import { View, Text, ListView } from 'react-native';
import * as firebase from 'firebase';

const styles = {
    viewStyle: {
        paddingTop: 15,
    },
    textStyle: {
        color: 'black',
        marginLeft: 15,
    }
};

export default class ProfileScreen extends React.Component {
    static navigationOptions = { 
        header: {
            title: 'My Profile',
            style: {
                backgroundColor: '#FFF',
                shadowOpacity: 0.2,
                shadowRadius: 1.5,
                shadowOffset: { height: 2 },
            }
        }
    };
     constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        'Things', 'Food', 'Entertainment', 'Beauty', 'Travel', 'Electronics'
      ])
    };
  }  
  componentDidMount() {
            /* reference to our database*/
            const rootRef = firebase.database().ref();
            /* assigns the a reference to one of the children(branch) of the database*/
                rootRef.on('value', snap => {
                this.setState({
                    info: snap.child('Data').val(),
                });
            });
  }
    render() {
        const { viewStyle, textStyle } = styles;
        return (
            <View style={viewStyle} >
           <ListView horizontal={true} dataSource={this.state.dataSource}
           renderRow={(rowData) => <Text style={textStyle}>{rowData}</Text>} />
           <Text>{this.state.info}</Text>
            </View>
        );
    }
}
