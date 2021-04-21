import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      
      <Image
        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 200, height: 200}}
      />
      

      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Mapas con Mike el depredador' }}
        />

        <Stack.Screen name="Mapas" component={ProfileScreen} />

      </Stack.Navigator>


    </NavigationContainer>

  );
}


const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Comenzar"
      onPress={() =>
        navigation.navigate('Mapas', { name: 'Jane' })
      }
    />
  );
};


const ProfileScreen = ({ navigation, route }) => {
  return <Text>Mapas con Mike</Text>;
};




