import { useNavigation } from '@react-navigation/native';
import React, { useState }  from 'react';
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { Select } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import { s } from './home.styles';
import { globals } from '../../styles/globals';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {

  const navigation = useNavigation();

  const [timePlayer1, setTimePlayer1] = useState('5');
  const [timePlayer2, setTimePlayer2] = useState('5');
  const [incrementPlayer1, setIncrementPlayer1] = useState('2');
  const [incrementPlayer2, setIncrementPlayer2] = useState('2');
  const [timeExtensivePlayer1, setTimeExtensivePlayer1] = useState("m");
  const [timeExtensivePlayer2, setTimeExtensivePlayer2] = useState("m");
  const [incrementExtensivePlayer1, setIncrementExtensivePlayer1] = useState("s");
  const [incrementExtensivePlayer2, setIncrementExtensivePlayer2] = useState("s");

  const start = async () => {
    const configs = {
      p1: {
        time: +timePlayer1,
        timeExtensive: timeExtensivePlayer1,
        increment: +incrementPlayer1,
        incrementExtensive: incrementExtensivePlayer1
      },
      p2: {
        time: +timePlayer2,
        timeExtensive: timeExtensivePlayer2,
        increment: +incrementPlayer2,
        incrementExtensive: incrementExtensivePlayer2
      }
    }

    await AsyncStorage.setItem('configs', JSON.stringify(configs));
    navigation.navigate('timer');
  }

  const checkTime = (time: string, isTime: boolean, player: number) => {
    const sanitizedText = time.replace(/[^a-zA-Z0-9]/g, '');
    const trimmedText = sanitizedText.replace(/^0+/, '');

    if(player === 1) {
      if(+trimmedText <= 60)
        isTime ? 
        (setTimePlayer1(trimmedText), setTimePlayer2(trimmedText)) : 
        (setIncrementPlayer1(trimmedText), setIncrementPlayer2(trimmedText));
    } else {
      if(+trimmedText <= 60)
        isTime ? setTimePlayer2(trimmedText) : setIncrementPlayer2(trimmedText);
    }
  } 

  const setMinimumTime = () => {
    if(!timePlayer1) {
      setTimePlayer1('1');
      if(!timePlayer2)
        setTimePlayer2('1');
    } else if(!incrementPlayer1) {
      setIncrementPlayer1('1')
      if(!incrementPlayer2)
        setIncrementPlayer2('1');
    }
  }

  return (
    <View style={s.containerMenu}>
      <Text style={s.title}>ChessClock</Text>

      <View style={ s.containerTimer }>
        <View style={ s.inputBox }>
          <TextInput 
            style={[ s.input, s.inputNumber ]}
            keyboardType='numeric'
            value={timePlayer1}
            maxLength={2}
            onChangeText={(item) => checkTime(String(item), true, 1)}
            onEndEditing={setMinimumTime}
          />
          <Select 
            style={[ s.input, s.inputTime ]} 
            width="75"
            height="75"  
            borderWidth={ 0 }
            borderRadius={ 0 } 
            selectedValue={ timeExtensivePlayer1 }
            onValueChange={(item: string) => {
              setTimeExtensivePlayer1(item)
              setTimeExtensivePlayer2(item)
            }} 
            dropdownIcon={ true }>
            <Select.Item label="min" value="m" />
            <Select.Item label="seg" value="s" />
          </Select>
        </View>
        <Icon name="plus" size={30} style={{ color: globals.primary_color }}/>
        <View style={ s.inputBox }>
          <TextInput 
            style={[ s.input, s.inputNumber ]}
            keyboardType='numeric'
            value={incrementPlayer1}
            maxLength={2}
            onChangeText={(item) => checkTime(String(item), false, 1)}
            onEndEditing={setMinimumTime}
          />
          <Select 
            style={[ s.input, s.inputTime ]} 
            width="75"
            height="75"  
            borderWidth={ 0 }
            borderRadius={ 0 } 
            selectedValue={ incrementExtensivePlayer1 }
            onValueChange={(item: string) => {
              setIncrementExtensivePlayer1(item)
              setIncrementExtensivePlayer2(item)
            }} 
            dropdownIcon={ true }>
            <Select.Item label="min" value="m" />
            <Select.Item label="seg" value="s" />
          </Select>
        </View>
      </View>

      {/* TIME 2 */}
      <View style={ s.containerTimer }>
        <View style={ s.inputBox }>
          <TextInput 
            style={[ s.input, s.inputNumber ]}
            keyboardType='numeric'
            value={timePlayer2}
            maxLength={2}
            onChangeText={(item) => checkTime(String(item), true, 2)}
            onEndEditing={() => { if(!timePlayer2) setTimePlayer2('1')}}
          />
          <Select 
            style={[ s.input, s.inputTime ]} 
            width="75"
            height="75"  
            borderWidth={ 0 }
            borderRadius={ 0 } 
            selectedValue={ timeExtensivePlayer2 }
            onValueChange={(item: string) => setTimeExtensivePlayer2(item)} 
            dropdownIcon={ true }>
            <Select.Item label="min" value="m" />
            <Select.Item label="seg" value="s" />
          </Select>
        </View>
        <Icon name="plus" size={30} style={{ color: globals.primary_color }}/>
        <View style={ s.inputBox }>
          <TextInput 
            style={[ s.input, s.inputNumber ]}
            keyboardType='numeric'
            value={incrementPlayer2}
            maxLength={2}
            onChangeText={(item) => checkTime(String(item), false, 2)}
            onEndEditing={() => { if(!incrementPlayer2) setIncrementPlayer2('1')}}
          />
          <Select 
            style={[ s.input, s.inputTime ]} 
            width="75"
            height="75"  
            borderWidth={ 0 }
            borderRadius={ 0 } 
            selectedValue={ incrementExtensivePlayer2 }
            onValueChange={(item: string) => setIncrementExtensivePlayer2(item)} 
            dropdownIcon={ true }>
            <Select.Item label="min" value="m" />
            <Select.Item label="seg" value="s" />
          </Select>
        </View>
      </View>

      <TouchableOpacity 
        onPress={start}
        style={ s.btnStart }
      >
        <Icon name="play" size={30} style={{ color: globals.black_default }}/>
      </TouchableOpacity>
    </View>
  );
}

