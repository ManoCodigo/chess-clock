import { Dimensions, StyleSheet } from "react-native";
import { globals } from "../../styles/globals";

const deviceHeight = Dimensions.get('window').height;

export const s = StyleSheet.create({
  containerClock: {
    height: deviceHeight,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 8,
    backgroundColor: globals.bg_color_primary
  },
  crono: {
    width: 340,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5000
  },
  celula: {
    justifyContent: 'center'
  },
  groupButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 30,
    paddingBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: globals.bg_color_secundary,
  }
});
