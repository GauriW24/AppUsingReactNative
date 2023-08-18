import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignIn = () => {
    // Implement your sign-in logic here
    console.log('signing in...');
    navigation.navigate('HomeScreen');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

return (
    <View style={styles.container}>
      <Text style={styles.logo}>Amazon</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        
      </View>
      <TouchableOpacity style={styles.Forgot} onPress={handleSignIn}>
        <Text style={styles.forgot}>Forgot Password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.register}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#900C3F',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  signInButton: {
    backgroundColor: '#900C3F',
    borderRadius: 50,
    paddingVertical: 12,
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpLink: {
    marginTop: 20,
  },
  signUpText: {
    color: '#0073e6',
    fontSize: 16,
  },
});

export default SignInPage;
