import { Dimensions, StyleSheet } from "react-native";
import { globals } from "../../styles/globals";

const deviceHeight = Dimensions.get('window').height;

export const s = StyleSheet.create({
  containerClock: {
    flex: 1,
    height: deviceHeight,
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
    backgroundColor: globals.black_default
  },
  containerTimer: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
  },
  timer: {
    fontSize: 50,
    fontWeight: 'bold',
    color: globals.white_default,
    marginLeft: 7,
  },
  celula: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: globals.radius_default
  },
  containerConfigs: {
    width: 80,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: 8
  },
  punishButton: {
    width: 60,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: globals.radius_default,
    backgroundColor: globals.primary_color,
  },
  punishButtonText: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  groupButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 30,
    paddingBottom: 30
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: globals.white_default,
  }
}); 