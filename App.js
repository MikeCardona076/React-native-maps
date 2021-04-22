import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image,TextInput, ActivityIndicator, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Mike Movies' }}
        />

        <Stack.Screen name="Movies" component={ProfileScreen} />

      </Stack.Navigator>


    </NavigationContainer>

  );
}


const HomeScreen = ({ navigation }) => {

  return (
      <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>

          <Image
            source={{uri: "https://c0.klipartz.com/pngpicture/241/690/gratis-png-pelicula-grafica-iconos-computacionales-cine-dvd.png"}}
            style={{width: 200, height: 200}}
          />

        <Button
            title="Comenzar"
            onPress={() =>
                navigation.navigate('Movies', { name: 'Mike' })
              }
        />
            
    </View>

  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

const ProfileScreen = ({ navigation, route }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
    </View>
  );
};







