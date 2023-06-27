import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './src/routes/stack.routes';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor={'#ffb500'}/>
    </>
  );
}