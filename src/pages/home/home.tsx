import { useNavigation } from '@react-navigation/native';
import React, { useState }  from 'react';
import { Text, View, TextInput, TouchableOpacity, NativeModules } from 'react-native';
import { s } from './home.styles';

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
    <View style={s.menu}>
      <Text style={s.title}>ChessClock</Text>
      <TextInput 
        style={ s.input }
        placeholderTextColor="#999"
        placeholder="Tempo das Brancas"
        onChangeText={time => setTempPlayer1(+time.replace(',', ''))}
        keyboardType='numeric'
      />
      <TextInput 
        style={ s.input }
        placeholderTextColor="#999"
        placeholder="Tempo das Pretas"
        onChangeText={time => setTempPlayer2(+time.replace(',', ''))}
        keyboardType='numeric'
      />
      <TouchableOpacity 
        onPress={start}
        style={ s.btnStart }
      >
        <Text>COMEÇAR</Text>
      </TouchableOpacity>
      <Text style={ s.obs }>Beta: O tempos dos jogadores colocar em segundos.</Text>
    </View>
  );
}

