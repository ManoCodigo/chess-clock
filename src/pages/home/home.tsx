import { useNavigation } from '@react-navigation/native';
import React, { useState }  from 'react';
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { Select } from "native-base";
import { s } from './home.styles';

export default function Home() {

  const navigation = useNavigation();

  const [timePlayer1, setTimePlayer1] = useState(false);
  const [timePlayer2, setTimePlayer2] = useState(false);
  const [tempPlayer1, setTempPlayer1] = useState(10);
  const [tempPlayer2, setTempPlayer2] = useState(10);
  const [selectedValue, setSelectedValue] = useState("M");
  const [selectedValue2, setSelectedValue2] = useState("S");

  const start = () => {
    navigation.navigate('timer');
  }

  return (
    <View style={s.containerMenu}>
      <Text style={s.title}>ChessClock</Text>

      <View style={ s.containerTimer }>
        <View style={ s.inputBox }>
          <TextInput 
            style={[ s.input, s.inputNumber ]}
            keyboardType='numeric'
            maxLength={2}
          />
          <Select 
            style={[ s.input, s.inputTime ]} 
            width="75"
            height="75"  
            borderWidth={ 0 }
            borderRadius={ 0 } 
            selectedValue={ selectedValue }
            onValueChange={(item: string) => setSelectedValue(item)} 
            dropdownIcon={ true }>
            <Select.Item label="H" value="H" />
            <Select.Item label="M" value="M" />
            <Select.Item label="S" value="S" />
          </Select>

        </View>
        <Text style={ s.plus }>+</Text>
        <View style={ s.inputBox }>
          <TextInput 
            style={[ s.input, s.inputNumber ]}
            keyboardType='numeric'
          />
          <Select 
            style={[ s.input, s.inputTime ]} 
            width="75"
            height="75"  
            borderWidth={ 0 }
            borderRadius={ 0 } 
            selectedValue={ selectedValue2 }
            onValueChange={(item: string) => setSelectedValue2(item)} 
            dropdownIcon={ true }>
            <Select.Item label="H" value="H" />
            <Select.Item label="M" value="M" />
            <Select.Item label="S" value="S" />
          </Select>
        </View>
      </View>

      <View style={ s.containerTimer }>
        <View style={ s.inputBox }>
          <TextInput 
            style={[ s.input, s.inputNumber ]}
            keyboardType='numeric'
            maxLength={2}
          />
          <Select 
            style={[ s.input, s.inputTime ]} 
            width="75"
            height="75"  
            borderWidth={ 0 }
            borderRadius={ 0 } 
            selectedValue={ selectedValue }
            onValueChange={(item: string) => setSelectedValue(item)} 
            dropdownIcon={ true }>
            <Select.Item label="H" value="H" />
            <Select.Item label="M" value="M" />
            <Select.Item label="S" value="S" />
          </Select>

        </View>
        <Text style={ s.plus }>+</Text>
        <View style={ s.inputBox }>
          <TextInput 
            style={[ s.input, s.inputNumber ]}
            keyboardType='numeric'
          />
          <Select 
            style={[ s.input, s.inputTime ]} 
            width="75"
            height="75"  
            borderWidth={ 0 }
            borderRadius={ 0 } 
            selectedValue={ selectedValue2 }
            onValueChange={(item: string) => setSelectedValue2(item)} 
            dropdownIcon={ true }>
            <Select.Item label="H" value="H" />
            <Select.Item label="M" value="M" />
            <Select.Item label="S" value="S" />
          </Select>
        </View>
      </View>

      <TouchableOpacity 
        onPress={start}
        style={ s.btnStart }
      >
        <Text>COMEÇAR</Text>
      </TouchableOpacity>
    </View>
  );
}

