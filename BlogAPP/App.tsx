import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screen/Home';
import {Provider} from './src/context/BlogContext';
import ShowScreen from './src/screen/ShowScreen';
import CreateScreen from './src/screen/CreateScreen';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EditScreen from './src/screen/EditScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation}) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('create')}>
                <Icon name="plus" size={20} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Show" component={ShowScreen}/>
        <Stack.Screen name="create" component={CreateScreen} />
        <Stack.Screen name="edit" component={EditScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => { 
  return (
    <Provider>
      <App />
    </Provider>
  );
};
