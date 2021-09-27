import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import HomeScreen from './screens/HomeScreen';
import BusinessScreen from './screens/BusinessScreen';
import HealthScreen from './screens/HealthScreen';
import SportsScreen from './screens/SportsScreen';
import TechScreen from './screens/TechScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ showLabel: false, activeTintColor: '#ffc107'}}>
        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            tabBarIcon: (props) => (
              <Icon type='feather' name='home' color={props.color} />
            )
          }} />
        <Tab.Screen name="Business" component={BusinessScreen}
          options={{
            tabBarIcon: (props) => (
              <Icon type='feather' name='dollar-sign' color={props.color} />
            )
          }} />
        <Tab.Screen name="Health" component={HealthScreen}
          options={{
            tabBarIcon: (props) => (
              <Icon type='feather' name='heart' color={props.color} />
            )
          }} />
        <Tab.Screen name="Sports" component={SportsScreen}
          options={{
            tabBarIcon: (props) => (
              <Icon type='ionicon' name='tennisball-outline' color={props.color} />
            )
          }} />
        <Tab.Screen name="Tech" component={TechScreen}
          options={{
            tabBarIcon: (props) => (
              <Icon type='ionicon' name='hardware-chip-outline' color={props.color} />
            )
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
