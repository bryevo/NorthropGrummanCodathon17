import React from 'react';
import { View, Text, ListView } from 'react-native';

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
        'About me', 'Interests', 'Contact Info', 'Settings'
      ])
    };
  }
    render() {
        const { viewStyle, textStyle } = styles;
        return (
            <View style={viewStyle} >
           <ListView horizontal={true} dataSource={this.state.dataSource}
           renderRow={(rowData) => <Text style={textStyle}>{rowData}</Text>} />
            </View>
        );
    }
}
