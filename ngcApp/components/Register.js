import React from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
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
            <View>
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

                <Text style = {styles.errorMessage}>
                    
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        marginTop: 20,
        padding: 5,
        fontSize: 18,
        borderWidth: 2,
        borderColor: '#48bbec',
        justifyContent: 'center'

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
    }
})
