import { Dimensions, StyleSheet } from "react-native";
import { globals } from "../../styles/globals";

const deviceHeight = Dimensions.get('window').height;

export const s = StyleSheet.create({
  menu: {
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
  input: { 
    textAlign: 'center',
    padding: 20,
    marginBottom: 15,
    borderRadius: globals.radius_default,
    backgroundColor: globals.bg_color_secundary, 
  },
  btnStart: {
    alignItems: 'center',
    padding: 20,
    borderRadius: globals.radius_default,
    backgroundColor: globals.primary_color,
  },
  obs: {
    fontSize: 12,
    color: globals.white_default,
    textAlign: 'center',
    marginTop: 20
  },
});
