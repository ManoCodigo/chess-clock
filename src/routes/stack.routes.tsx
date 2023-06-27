import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home/home';
import Timer from '../pages/timer/timer';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="home"
        component={ Home }
      />
      <Screen 
        name="timer"
        component={ Timer }
      />
    </Navigator>
  )
}