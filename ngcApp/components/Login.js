import React from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet, Image } from 'react-native';
import firebase from 'firebase';

export default class Register extends React.Component {
    constructor() {
        super();
        
        this.state = {
            email: "",
            password: "",
            errors:'hello',
        }
    }
    onRegisterPressed() {
        try {
            const promise = firebase.auth().signInUserWithEmailAndPassword(this.state.email, this.state.password);
        } catch (error) {
              this.setState({ error: error.message });
        }
        this.props.navigation.navigate('Dashboard', { 
            data: { 
                info: this.state.email.slice(0, this.state.email.indexOf('@'))
            } 
        });    
    }
    render() {
        return (
            <Image source={require('../assets/bg_firewords.jpg')} style = {style.background}>
            <View >
            <Text style = {style.loginText}>
            Great to see you!
            </Text>
                <TextInput
                    onChangeText={(val)=> this.setState({email:val})}
                    style={style.input} 
                    placeholder = "Email"
                    placeholderTextColor = "white"
                />
                <TextInput
                    onChangeText={(val)=> this.setState({password:val})}
                    style={style.input} 
                    placeholder = "Password"
                    placeholderTextColor = "white"
                    secureTextEntry = 'true'
                />
                <TouchableHighlight style = {style.button} onPress={this.onRegisterPressed.bind(this)}>
                    <Text style = {style.buttonText}>
                        Login
                    </Text>
                </TouchableHighlight>

                <Text style = {style.errorMessage}>
                    {this.state.errors}
                </Text>
            </View>
            </Image>
        );
    }
}

const style = {
    viewStyle: {
        backgroundColor: '#122f5e'
    },
    loginText: {
        fontSize: 50,
        backgroundColor: 'transparent',
        marginTop: 100,
        marginBottom: 30,
        color: '#fff',
        textAlign: 'center',
        textShadowColor: '#000',
        textShadowRadius: 4,
        textShadowOffset: { width: 3, height: 4 },
    },
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
        backgroundColor: '#88d688',
        alignSelf: 'stretch',
        marginTop:100,
        marginBottom: 500,
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
 
    },
    buttonText: {
        fontSize: 22,
        color: '#FFF',
        alignSelf: 'center'
    },
    heading: {
        fontSize: 30,
    }
};

