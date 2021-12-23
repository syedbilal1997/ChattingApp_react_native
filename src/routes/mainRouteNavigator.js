import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// importing screens
import Login from '../AuthScreen/LoginScreen';
import SignUp from '../AuthScreen/SignUp';
import HomeScreen from '../Screens/HomeScreen';
import FriendsList from '../Screens/FriendsList';
import ChatScreen from '../Screens/ChatScreen';
import CallScreen from '../Screens/CallScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={MyTabs} />
   
    </Stack.Navigator>
  );
}
function HomeScreenStack() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="CallLog" component={FriendsList} />

    </Stack.Navigator>
  );
}

function ChatStack() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
    <Stack.Screen name="ChatView" component={HomeScreen} />
    <Stack.Screen name="ChatScreen" component={ChatScreen} />
    <Stack.Screen name="CallScreen" component={CallScreen} />

    </Stack.Navigator>
  );
}
function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="ChatApp" >
      <Tab.Screen name="ChatApp" component={ChatStack} />
      <Tab.Screen name="Calls" component={FriendsList} />

    </Tab.Navigator>
  );
}

export default MyStack;