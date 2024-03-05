import React from 'react';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Home from './src/screens/Home';
import Details from './src/screens/Details';

export type RootStackParamList = {
  Home: undefined;
  Details: {ProductId: string};
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Trending Products',
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'Product details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

// const styles = StyleSheet.create({});
