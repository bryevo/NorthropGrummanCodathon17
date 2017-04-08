import React from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
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
            try{
              const promise = firebase.auth().signInUserWithEmailAndPassword(this.state.email, this.state.password)
            } catch(error){
              this.setState({error:error.message});
            }

    }

    render() {
        return (
            <View>
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
                <TouchableHighlight style = {styles.button} onPress={this.onRegisterPressed.bind(this)}>
                    <Text style = {styles.buttonText}>
                        Login
                    </Text>
                </TouchableHighlight>

                <Text style = {styles.errorMessage}>
                    {this.state.errors}
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
