import { Dimensions, StyleSheet } from "react-native";
import { globals } from "../../styles/globals";

const deviceHeight = Dimensions.get('window').height;

export const s = StyleSheet.create({
  containerMenu: {
    height: deviceHeight,
    padding: 20,
    paddingTop: 130,
    backgroundColor: globals.black_default
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30
  },

  containerTimer: {
    display: 'flex',    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  inputBox: {
    display: 'flex',    
    flexDirection: 'row',
  },
  input: {
    width: 75,
    height: 75,
    fontSize: 26,
    textAlign: 'center',
    backgroundColor: globals.white_default,
  },
  inputNumber: {
    borderBottomLeftRadius: globals.radius_default,
    borderTopLeftRadius: globals.radius_default,
  },
  inputTime: {
    borderBottomRightRadius: globals.radius_default,
    borderTopRightRadius: globals.radius_default,
  },

  btnStart: {
    alignItems: 'center',
    padding: 20,
    marginTop: 30,
    borderRadius: globals.radius_default,
    backgroundColor: globals.primary_color,
  },
});
