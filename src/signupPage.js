import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handleSignUp = () => {
    console.log('signing in...');
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
        <TextInput
          style={styles.input}
          placeholder="confirm password"
          placeholderTextColor="#003f5c"
          onChangeText={text => setConfirmPassword(text)}
          value={confirm_password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.login} onPress={handleSignIn}>
          <Text style={styles.login}>Already Have an account? Log in</Text>
        </TouchableOpacity>
      </View>
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
  login: {
    alignItems: 'center',
    marginTop: 10,
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
  signUpButton: {
    backgroundColor: '#900C3F',
    borderRadius: 50,
    paddingVertical: 12,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignUpPage;
