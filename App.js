import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Busniss from './screen/Busniss';
import All from './screen/All'
import Sport from './screen/Sport';
import Health from './screen/Health';
import Tech from './screen/Tech';
import { Icon } from 'react-native-elements';
import { NativeBaseProvider } from "native-base";
import AnimatedAppLoader from './screen/AnimatedAppLoader';
import Flashscreen from './screen/Flashscreen';
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
      <Tab.Navigator tabBarOptions={{showLabel: false, tabBarActiveTintColor: '#0000'}} >
        <Tab.Screen name="All" component={All}

          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon
                type='feather'
                
                name='home' color={color} />
            ),
          }}
        />
        <Tab.Screen name="Business" component={Busniss} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              type='feather'
              name='dollar-sign' color={color} />
          ),
        }} />
        <Tab.Screen name="Sport" component={Sport} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
            type='ionicon'
              name="tennisball-outline" color={color} />
          ),
        }} />
        <Tab.Screen name="Health" component={Health} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              type='feather'
              name='heart' color={color} />

          ),
        }} />
        <Tab.Screen name="Tech" component={Tech} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              type='feather'
              name='cpu' color={color} />
          ),
        }} />
      </Tab.Navigator>
</NativeBaseProvider>
    </NavigationContainer>
  );
}
