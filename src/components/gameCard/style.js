import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    shadowOpacity: 0.3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 10,
  },
  titleText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
  descText: {
    color: "white",
    fontSize: 9,
  },
  cardLeft: {
    width: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  cardRight: {
    width: "45%",
    height: "100%",
    justifyContent: "space-around",
  },
  footerText: {
    fontSize: 10,
    fontWeight: "600",
    color: "white",
  },
});
