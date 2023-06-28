import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { s } from "./timer.styles";

export default function Timer() {
  const [timeColorPlayer1, setTimeColorPlayer1] = useState('#eee')
  const [timeColorPlayer2, setTimeColorPlayer2] = useState('#eee')
  const [timeBgColorPlayer1, setTimeBgColorPlayer1] = useState('#1a1a1a')
  const [timeBgColorPlayer2, setTimeBgColorPlayer2] = useState('#1a1a1a')

  const [timePlayer1, setTimePlayer1] = useState(false)
  const [timePlayer2, setTimePlayer2] = useState(false)
  const [isFinish, setIsFinish] = useState(false)

  const [isPaused, setIsPaused] = useState(false)

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

  const pause = () => {
    setIsPaused(!isPaused);
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

      <View style={ s.containerTimer }>
        { !isPaused &&
          <View style={ s.containerConfigs }>
            <TouchableOpacity style={ s.punishButton }>
              <Text style={ s.punishButtonText }>-1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ s.punishButton }>
              <Text style={ s.punishButtonText }>+1</Text>
            </TouchableOpacity>
          </View>
        }

        <View style={ s.celula }>
          <View style={ s.timer }>
            <Text>00:00:00</Text>
          </View>
        </View>
      </View>

      <View style={ s.groupButtons }>
        { !isPaused &&
          <TouchableOpacity onPress={pause}>
            <Text style={ s.buttonText }>V</Text>
          </TouchableOpacity>
        }

        <TouchableOpacity onPress={pause} >
          <Text style={ s.buttonText }>P</Text>
        </TouchableOpacity>

        { !isPaused &&
          <TouchableOpacity onPress={pause} >
            <Text style={ s.buttonText }>G</Text>
          </TouchableOpacity>
        }
      </View>

      <View style={ s.containerTimer }>
        { !isPaused &&
          <View style={ s.containerConfigs }>
            <TouchableOpacity style={ s.punishButton }>
              <Text style={ s.punishButtonText }>-1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ s.punishButton }>
              <Text style={ s.punishButtonText }>+1</Text>
            </TouchableOpacity>
          </View>
        }
        <View style={ s.celula }>
          <View style={ s.timer }>
            <Text>00:00:00</Text>
          </View>
        </View>
      </View>

    </View> 
  )
}