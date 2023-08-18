import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInPage from './signinPage';
import SignUpPage from './signupPage';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const RootNavigator =  () => {
  return (
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
          headerShown: false}} />
      </Stack.Navigator>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
export default RootNavigator;
