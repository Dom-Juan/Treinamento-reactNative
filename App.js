import React from 'react';
import { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Treinamento de React Native</Text>
        <TextInput style={styles.input}
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          keyboardType='email-address'
          returnKeyType="next"
          placeholder='Email'
          placeholderTextColor='rgba(225,225,225,0.7)' />

        <TextInput style={styles.input}
          returnKeyType="go"
          ref={(input) => this.passwordInput = input}
          placeholder='Senha'
          placeholderTextColor='rgba(225,225,225,0.7)'
          secureTextEntry />

        <TouchableOpacity style={styles.buttonContainer}
        //onPress={onButtonPress}
        >
          <Text style={styles.btn}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    padding: 20
  },
  loginContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  buttonContainer: {
    backgroundColor: '#2980b6',
    paddingVertical: 15
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
  loginBox: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff'
  },
  btn: {
    paddingVertical: 15,
    backgroundColor: 'purple',
  }
});
