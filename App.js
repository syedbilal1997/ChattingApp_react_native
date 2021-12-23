import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import routes 
import MainRoute from './src/routes/mainRouteNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <MainRoute/>
    </NavigationContainer>
  );
}