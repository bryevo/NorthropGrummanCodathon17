import React from 'react';
import { View, Text, ListView } from 'react-native';
import * as firebase from 'firebase';

const styles = {
    viewStyle: {
        paddingTop: 15,
    },
    viewStyle2: {
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
},
  profileTitle: {
    fontSize: 30,    
    fontWeight: 'bold',
    marginBottom: 30
  },
  textStyle: {
    marginLeft: 50,
    marginBottom: 15
  },
  textStyle2: {
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 15
  },
  listStyle: {
    marginLeft: 15,
    marginBottom: 15
  },
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
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); 
    this.state = {
        dataSource: ds.cloneWithRows(['']),
        info: '',
    };
  }  
componentWillMount() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); 
/* reference to our database*/
    const rootRef = firebase.database().ref();
    /* assigns the a reference to one of the children(branch) of the database*/
        rootRef.on('value', snap => {
        this.setState({
            info: snap.child('Mike Yao').val(),
            dataSource: ds.cloneWithRows(snap.child('Mike Yao').child('interest').val()),
        });
    });
}
    render() {
        const fullProfile = this.state.info;
        const { viewStyle, textStyle2, viewStyle2 } = styles;
        return (
            <View style={viewStyle} >
                <View style={viewStyle2}><Text style={styles.profileTitle}>Welcome {fullProfile.username}</Text></View>
                <Text style={textStyle2}>Email:</Text>
                <Text style={styles.textStyle}>mikeyao@ngc.com</Text>
                <Text style={styles.textStyle2}>Things that you have interests in: </Text>
                <Text>Things To Do, Entertainment, Food, Sports </Text>
                </View>
        );
    }
}

