/*import React from 'react';
import SignInPage from './src/signinPage';
import SignUpPage from './src/signupPage';

const App = () =>{
  return <SignUpPage />;
};
export default App;*/

/*
import React from 'react';
import SignInPage from './src/signinPage';

const App = () =>{
  return <SignInPage />;
};
export default App;*/

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import Navigation from './src/RootNavigator'; // Adjust the path based on your project structure
import RootNavigator from './src/RootNavigator';

const App= () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};
export default App;