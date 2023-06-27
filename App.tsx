import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './src/routes/stack.routes';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <>
    <NativeBaseProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor={'#ffb500'}/>
    </NativeBaseProvider>
    </>
  );
}