import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    justifyContent: "center",
    flexDirection: "row",
  },
  battery: {
    padding: 10,
    width: 100,
    height: 80,
    borderWidth: 3,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  batteryHeader: {
    justifyContent: "center",
    alignSelf: 'center',
    width: 5,
    height: 20,
    borderWidth: 3,
    borderRadius: 2,
  },
  text: {
    fontSize: 20,
  },
});

export default styles;