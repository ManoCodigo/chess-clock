import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './src/routes/stack.routes';
import { NativeBaseProvider } from 'native-base';
import { globals } from './src/styles/globals';

export default function App() {
  return (
    <>
    <NativeBaseProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor={globals.black_default}/>
    </NativeBaseProvider>
    </>
  );
}