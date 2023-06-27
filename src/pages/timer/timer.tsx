import { useState } from "react";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { View, TouchableOpacity, Text } from "react-native";
import { s } from "./timer.styles";
// import Constants from 'expo-constants';
// import CountDown from 'react-native-countdown-component';

export default function Timer() {
  const [timeColorPlayer1, setTimeColorPlayer1] = useState('#eee')
  const [timeColorPlayer2, setTimeColorPlayer2] = useState('#eee')
  const [timeBgColorPlayer1, setTimeBgColorPlayer1] = useState('#1a1a1a')
  const [timeBgColorPlayer2, setTimeBgColorPlayer2] = useState('#1a1a1a')

  const [timePlayer1, setTimePlayer1] = useState(false)
  const [timePlayer2, setTimePlayer2] = useState(false)
  const [isFinish, setIsFinish] = useState(false)

  const isStarted = (playerStarted: number) => {
    if (!timePlayer1 && !timePlayer2) {
      if (playerStarted === 1) {
        setTimePlayer1(false)
        setTimePlayer2(true)

        setTimeColorPlayer2('#1a1a1a')
      } else {
        setTimePlayer1(true)
        setTimePlayer2(false)

        setTimeColorPlayer1('#eee')
      }
    }
  }

  const pressPlayer1 = () => {
    if (!isFinish) {
      isStarted(1)
      setTimePlayer1(false)
      setTimePlayer2(true)
      
      setTimeColorPlayer1('#eee')
      setTimeColorPlayer2('#1a1a1a')
      setTimeBgColorPlayer1('#1a1a1a')
      setTimeBgColorPlayer2('#ffb500')
    }
  }

  const pressPlayer2 = () => {
    if (!isFinish) {
      isStarted(2)
      setTimePlayer1(true)
      setTimePlayer2(false)

      setTimeColorPlayer1('#1a1a1a')
      setTimeColorPlayer2('#eee')
      setTimeBgColorPlayer1('#ffb500') 
      setTimeBgColorPlayer2('#1a1a1a')
    }
  }

  const losePlayer1 = () => {
    setIsFinish(true)
    setTimeBgColorPlayer1('#b52a2a')
    // alert('Acabou o tempo!')
  }

  const losePlayer2 = () => {
    setIsFinish(true)
    setTimeBgColorPlayer2('#b52a2a')
    // alert('Acabou o tempo!')
  }
  
  const back = () => {
    setTimeColorPlayer1('#eee')
    setTimeColorPlayer2('#eee')
    setTimeBgColorPlayer1('#1a1a1a')
    setTimeBgColorPlayer2('#1a1a1a')
    setTimePlayer1(false)
    setTimePlayer2(false)
    setIsFinish(false)
  }

  return (
    <View style={ s.containerClock }>
    <View style={ s.celula }>
      {/* <CountDown
        style={[ s.crono, { backgroundColor: timeBgColorPlayer1, transform: [{rotate: '180deg'}] }]}

        until={ tempPlayer1 }
        running={ timePlayer1 } 
        onPress={ pressPlayer1 }
        onFinish={ losePlayer1 }

        // ESTILOS
        showSeparator={ true }
        timeToShow={['M', 'S']}
        timeLabels={{m: '', s: ''}}
        size={ 40 }

        digitStyle={{ backgroundColor: ''}}
        digitTxtStyle={{ color: timeColorPlayer1 }}
        separatorStyle={{ color: timeColorPlayer1 }}
      /> */}
    </View>

    <View style={ s.groupButtons }>
      <TouchableOpacity>
        <Text style={ s.buttonText }>VOLTAR</Text>
      </TouchableOpacity>
    </View>

    <View style={ s.celula }>
      {/* <CountDown
        style={[ s.crono, { backgroundColor: timeBgColorPlayer2 }]}

        until={ tempPlayer2 }     //TEMPO DO CRONOMETRO
        running={ timePlayer2 }   // PAUSE
        onPress={ pressPlayer2 } 
        onFinish={ losePlayer2 }  // QUANTO TEMPO CHEGAR A ZERO

        // ESTILOS
        showSeparator={ true }
        timeToShow={['M', 'S']}
        timeLabels={{ m: '', s: '' }}
        size={ 40 }

        digitStyle={{ backgroundColor: ''}}
        digitTxtStyle={{ color: timeColorPlayer2 }}
        separatorStyle={{ color: timeColorPlayer2 }}
      />  */}
    </View>
  </View> 
  )
}