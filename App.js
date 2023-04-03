import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import MainTab from './src/stacks/MainTab';
import HiddenPages from './src/stacks/HiddenPages';
import {createStackNavigator} from '@react-navigation/stack';
import NewDevice from './src/screens/NewDevice';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{headerShown: false}}
        />
        <Stack.Screen name="NewDevice" component={NewDevice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
