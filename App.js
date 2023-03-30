import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import MainTab from './src/stacks/MainTab';
import HiddenPages from './src/stacks/HiddenPages';

export default function App() {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
}
