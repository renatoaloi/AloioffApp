import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Devices from '../screens/Devices';
import NewDevice from '../screens/NewDevice';

const Stack = createStackNavigator();

export default () => (
  <Tab.Navigator>
    <Stack.Navigator>
      <Stack.Screen name="Dispositivos" component={Devices} />
      <Stack.Screen name="Novo Dispositivo" component={NewDevice} />
    </Stack.Navigator>
  </Tab.Navigator>
);
