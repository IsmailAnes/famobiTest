import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  headerFilters: {
    flexDirection: "row",
    width: "18%",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
  },
  headerIcon: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },
  handle: { backgroundColor: "white" },
  modal: {
    backgroundColor:'#F9F9FF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalHeader: { height: 55, alignItems: "center", justifyContent: "center" },
  modalHeaderTitle: {
    color: "#323232",
    fontSize: 17,
  },
  modalHeaderTitleModal: {
    color: "#323232",
    fontSize: 17,
  },
  modalSectionTitle: {
    color: "#323232",
    fontSize: 17,
    marginBottom:20,
    marginTop:20
  },
  modalContainer: { alignItems: "flex-start", padding:10 },
  platformContainer:{
    height:40,
    width:100,
    backgroundColor:'#0091C3',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginTop:5
  },
  platformContainerUnselected:{
    height:40,
    width:100,
    backgroundColor:'white',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginTop:5
  },

  genreContainer:{
    height:40,
    width:100,
    backgroundColor:'white',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginTop:5
  },

  genreContainerSelected:{
    height:40,
    width:100,
    backgroundColor:'#0091C3',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginTop:5
  },
});
