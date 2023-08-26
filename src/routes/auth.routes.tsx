import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as screens from '@authScreens/authScreens';

const Stack = createNativeStackNavigator();

export const StackedAuthRoutes = () => {
  return(
    <Stack.Navigator initialRouteName='SignIn' screenOptions={
      { headerShown: false }
    }>
      <Stack.Screen name='SignIn' component={screens.SignIn} />
    </Stack.Navigator>
  );
}