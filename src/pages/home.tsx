import { useNavigation } from '@react-navigation/native';
import React, { useState }  from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput, TouchableOpacity, NativeModules } from 'react-native';
// import Constants from 'expo-constants';
// import CountDown from 'react-native-countdown-component';

// let deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default function Home() {

  const navigation = useNavigation();

  const [timePlayer1, setTimePlayer1] = useState(false);
  const [timePlayer2, setTimePlayer2] = useState(false);
  const [tempPlayer1, setTempPlayer1] = useState(10);
  const [tempPlayer2, setTempPlayer2] = useState(10);

  const start = () => {
    navigation.navigate('timer');
  }

  return (
    <View style={styles.menu}>
      <Text style={styles.title}>ChessClock</Text>
      <TextInput 
        style={ styles.input }
        placeholderTextColor="#999"
        placeholder="Tempo das Brancas"
        onChangeText={time => setTempPlayer1(+time.replace(',', ''))}
        keyboardType='numeric'
      />
      <TextInput 
        style={ styles.input }
        placeholderTextColor="#999"
        placeholder="Tempo das Pretas"
        onChangeText={time => setTempPlayer2(+time.replace(',', ''))}
        keyboardType='numeric'
      />
      <TouchableOpacity 
        onPress={start}
        style={ styles.btnStart }
      >
        <Text>COMEÇAR</Text>
      </TouchableOpacity>
      <Text style={ styles.obs }>Beta: O tempos dos jogadores colocar em segundos.</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  // MENU
  menu: {
    height: deviceHeight,
    padding: 20,
    paddingTop: 180,
    backgroundColor: '#1a1a1a'
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ffb500',
    textAlign: 'center',
    paddingBottom: 30
  },
  input: { 
    textAlign: 'center',
    padding: 20,
    marginBottom: 15,
    borderRadius: 50,
    backgroundColor: '#eee', 
  },
  btnStart: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 50,
    backgroundColor: '#ffb500',
  },
  obs: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20
  },
});
