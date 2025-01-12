import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './Doctor/WelcomeScreen';
import LoginScreen from './Doctor/LoginScreen';

import SignupScreen from './Doctor/SignupScreen';

import DoctorSpecialistList from './Doctor/DoctorSpecialistList';
import Specialist from './Doctor/Specialist';
import DetailsScreen from './Doctor/DetailsScreen';
import AppointmentDetailsScreen from './Doctor/AppointmentDetailsScreen'; // New screen
//import CallFeature from './CallFeature';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="DoctorSpecialistList" component={DoctorSpecialistList} />
        <Stack.Screen name="Specialist" component={Specialist} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="AppointmentDetails" component={AppointmentDetailsScreen} />
    


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
