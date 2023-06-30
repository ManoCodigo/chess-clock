import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Text, TouchableHighlight } from "react-native";
import { s } from "./timer.styles";

export default function Timer() {
  const navigation = useNavigation();

  const [player1Time, setPlayer1Time] = useState(5 * 60);
  const [player2Time, setPlayer2Time] = useState(5 * 60);
  const [activePlayer, setActivePlayer] = useState(0);
  const [isPaused, setIsPaused] = useState(false); 
  const [isStarted, setIsStarted] = useState(false);
  const [isFinish, setIsFinish] = useState(false); 
  const [colorTurn, setColorTurn] = useState('#ffb500'); 
  const [rotateModel, setRotateModel] = useState(1); 
  const [rotatesModelCurrent, setRotatesModelCurrent] = useState({
    btnsMin: '0deg',
    btnsCentral: '0deg',
    timerP1: '0deg',
    timerP2: '0deg',
  }); 

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${padTime(minutes)}:${padTime(seconds)}`;
  }

  const padTime = (value: number) => {
    return value.toString().padStart(2, '0');
  }

  useEffect(() => {
    let intervalId: number;

    if (isStarted && !isPaused && !isFinish) {
      intervalId = setInterval(() => {
        if (activePlayer === 1) {
          if (player1Time > 0) {
            setPlayer1Time((prevTime) => prevTime - 1)
          } else {
            clearInterval(intervalId);
            finish();
          }
        } else if (activePlayer === 2) {
          if (player2Time > 0) {
            setPlayer2Time((prevTime) => prevTime - 1);
          } else {
            clearInterval(intervalId);
            finish();
          }
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPaused, isStarted, activePlayer, player2Time, player1Time ]);

  const togglePlayer = (playerTurn: number) => {
    if(playerTurn === 1 && isStarted) 
      setPlayer2Time((prevTime) => prevTime + 2);
    else if(playerTurn === 2 && isStarted)
      setPlayer1Time((prevTime) => prevTime + 2);

    if (!isStarted) setIsStarted(true);
    
    setActivePlayer(playerTurn);
  }

  const checkPunishTime = (player: number, isPlus: boolean) => {
    const playerTime = player === 1 ? player1Time : player2Time;
    const calcTime = isPlus ? (playerTime + 60) : (playerTime - 60);

    if(calcTime <= 0 || calcTime > 3600)
      return false;
    else
      return true;
  }

  const punish1Min = (player: number, isPlus: boolean) => {
    if(checkPunishTime(player, isPlus)) {
      if (player === 1)
        setPlayer1Time((prevTime) => isPlus ? (prevTime + 60) : (prevTime - 60));
      else 
        setPlayer2Time((prevTime) => isPlus ? (prevTime + 60) : (prevTime - 60));
    }
  }

  const pause = () => {
    setIsPaused(!isPaused);
  }

  const finish = () => {
    setColorTurn('#ff4000');
    setIsFinish(true);
  }

  const rotate = () => {
    setRotateModel((rotate) => (rotate + 1) > 3 ? 1 : rotate + 1);
    switchRotateModel();
  }

  const switchRotateModel = () => {
    switch(rotateModel) {
      case 1:
        setRotatesModelCurrent({
          btnsMin: '90deg',
          btnsCentral: '90deg',
          timerP1: '180deg',
          timerP2: '0deg',
        });
        break;
      case 2:
        setRotatesModelCurrent({
          btnsMin: '0deg',
          btnsCentral: '0deg',
          timerP1: '0deg',
          timerP2: '0deg',
        });
        break;
      case 3:
        setRotatesModelCurrent({
          btnsMin: '90deg',
          btnsCentral: '90deg',
          timerP1: '90deg',
          timerP2: '90deg',
        });
        break;
    }
  }

  const back = () => {
    navigation.navigate('home');
  }

  return (
    <View style={ s.containerClock }>

      {/* TIMER 1 */}
      <View style={ s.containerTimer }>
        { isPaused &&
          <View style={ s.containerConfigs }>
            <TouchableOpacity style={[ s.punishButton, {
              transform: [{ rotate: rotatesModelCurrent.btnsMin }]
            } ]} onPress={() => { if(!isFinish) punish1Min(1, false) }}>
              <Text style={ s.punishButtonText }>-1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ [s.punishButton, {
              transform: [{ rotate: rotatesModelCurrent.btnsMin }]
            } ]} onPress={() => { if(!isFinish) punish1Min(1, true) }}>
              <Text style={ s.punishButtonText }>+1</Text>
            </TouchableOpacity>
          </View>
        }

        <TouchableHighlight onPress={() => { 
            if(!isPaused && !isFinish && activePlayer != 2) 
              togglePlayer(2) 
          }}
          style={[ 
            s.celula,
            {
              backgroundColor: activePlayer === 1 ? colorTurn : '#1a1a1a',
            }
          ]} 
        >
          <Text style={[ s.timer, {
            color: activePlayer === 1 ? '#1a1a1a' : '#eee',
            transform: [{ rotate: rotatesModelCurrent.timerP1 }]
          } ]}>{formatTime(player1Time)}</Text>
        </TouchableHighlight>
      </View>

      {/* CENTRAL */}
      <View style={ s.groupButtons }>
        { isPaused &&
          <TouchableOpacity onPress={back} style={{ transform: [{ rotate: rotatesModelCurrent.btnsCentral }] }}>
            <Text style={ s.buttonText }>V</Text>
          </TouchableOpacity>
        }

        <TouchableOpacity onPress={pause} style={{ transform: [{ rotate: rotatesModelCurrent.btnsCentral }] }}>
          <Text style={ s.buttonText }>P</Text>
        </TouchableOpacity>

        { isPaused &&
          <TouchableOpacity onPress={rotate} style={{ transform: [{ rotate: rotatesModelCurrent.btnsCentral }] }}>
            <Text style={ s.buttonText }>G</Text>
          </TouchableOpacity>
        }
      </View>

      {/* TIMER 2 */}
      <View style={ s.containerTimer }>
        { isPaused &&
          <View style={ s.containerConfigs }>
            <TouchableOpacity style={[ s.punishButton, {
              transform: [{ rotate: rotatesModelCurrent.btnsMin }]
            } ]} onPress={() => { if(!isFinish) punish1Min(2, false) }}>
              <Text style={ s.punishButtonText }>-1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ s.punishButton, {
              transform: [{ rotate: rotatesModelCurrent.btnsMin }]
            } ]} onPress={() => { if(!isFinish) punish1Min(2, true) }}>
              <Text style={ s.punishButtonText }>+1</Text>
            </TouchableOpacity>
          </View>
        }
        <TouchableHighlight onPress={() => { 
            if(!isPaused && !isFinish && activePlayer != 1) 
              togglePlayer(1) 
          }}
          style={[ 
            s.celula,
            {
              backgroundColor: activePlayer === 2 ? colorTurn : '#1a1a1a',
            }
          ]} 
        >
          <Text style={[ s.timer, {
            color: activePlayer === 2 ? '#1a1a1a' : '#eee',
            transform: [{ rotate: rotatesModelCurrent.timerP2 }]
          } ]}>{formatTime(player2Time)}</Text>
        </TouchableHighlight>
      </View>

    </View> 
  )
}