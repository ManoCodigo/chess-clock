import { Dimensions, StyleSheet } from "react-native";
import { globals } from "../../styles/globals";

const deviceHeight = Dimensions.get('window').height;

export const s = StyleSheet.create({
  containerMenu: {
    height: deviceHeight,
    padding: 20,
    paddingTop: 180,
    backgroundColor: globals.bg_color_primary
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: globals.primary_color,
    textAlign: 'center',
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
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: globals.bg_color_secundary,
  },
  inputNumber: {
    borderBottomLeftRadius: globals.radius_default,
    borderTopLeftRadius: globals.radius_default,
  },
  inputTime: {
    borderBottomRightRadius: globals.radius_default,
    borderTopRightRadius: globals.radius_default,
  },
  plus: {
    fontSize: 50,
    color: globals.primary_color
  },

  btnStart: {
    alignItems: 'center',
    padding: 20,
    borderRadius: globals.radius_default,
    backgroundColor: globals.primary_color,
  },
});
