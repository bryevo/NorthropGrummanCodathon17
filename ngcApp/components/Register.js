import React from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet, Image } from 'react-native';
import firebase from 'firebase';
// var Firebase = require('firebase');
export default class Register extends React.Component {
    constructor() {
        super();
        
        this.state = {
            name: "",
            email: "",
            password: "",
            password_contirmation:"",
            errors:'',
        }
    }
    
    onRegisterPressed() {
        try {
            console.log("OUr Nav " + this.props.navigation);
            const promise = firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
        } catch (e) {
        }
        this.props.navigation.navigate('Interests', { profInfo: this.state });          
    }

    render() {
        return (
            <Image source={require('../assets/bg_ng.jpg')} style = {styles.background}>
            <View style={styles.viewStyle}>
                <TextInput
                    onChangeText={(val)=> this.setState({name:val})}
                    style={styles.input} 
                    placeholder = "Name"
                />
                <TextInput
                    onChangeText={(val)=> this.setState({email:val})}
                    style={styles.input} 
                    placeholder = "Email"
                />
                <TextInput
                    onChangeText={(val)=> this.setState({password:val})}
                    style={styles.input} 
                    placeholder = "Password"
                    secureTextEntry = {true}
                />
                <TextInput
                    onChangeText={(val)=> this.setState({oassword_confirmation:val})}
                    style={styles.input} 
                    placeholder = "Confirm Password"
                    secureTextEntry = {true}
                />
                <TouchableHighlight style = {styles.button} onPress={this.onRegisterPressed.bind(this)}>
                    <Text style = {styles.buttonText}>
                        Create Account!
                    </Text>
                </TouchableHighlight>

                <Text style={styles.errorMessage}>
                    
                </Text>
            </View>
            </Image>
        );
    }
}

const styles = {
    input: {
        backgroundColor: 'transparent',
        height: 50,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        fontSize: 20,
        textColor: '#fff',
        placeholderTextColor: '#fff',
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'left'
    },
    background: {
      flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
      //Image.resizeMode.contain
  },
    errorMessage: {
        color: 'red'
    },
    button: {
        height: 50,
        backgroundColor: '#48bbec',
        alignSelf: 'stretch',
        marginTop:10,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 22,
        color: '#FFF',
        alignSelf: 'center'
    },
    heading: {
        fontSize: 30,
    },

};

