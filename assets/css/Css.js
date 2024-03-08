import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',

    },
    container2: {
      flex:1,
      backgroundColor:'#FFF'
    },
    container3: {
      marginLeft: 12
    },
    container4: {
      flexDirection: 'row',
    },
    container5: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20

    },
    textPage: {
        backgroundColor:'orange',
        padding:20
    },
    logo: {
      width: 290,
      height: 100,
      resizeMode: 'contain',
      marginBottom: 130,
      marginVertical:-130
    },
    logoform: {
      width: 290,
      height: 100,
      resizeMode: 'contain',
      marginBottom: 50,
      marginVertical:-130
    },
    buttonP: {
      padding: 13,
      backgroundColor: '#C72100',
      alignItems: "center",
      alignSelf: "center",
      borderRadius: 5,
      marginLeft: 12,
      marginRight: 12,
      marginTop:5,
      marginBottom: 5,
      width: 90,
      height: 45,
    },
    buttonM: {
      padding: 13,
      backgroundColor: '#C72100',
      alignItems: "center",
      alignSelf: "center",
      borderRadius: 5,
      marginTop:80,
      marginLeft: 9,
      marginRight: 9,
      marginBottom: 5,
      width: 120
    },
    button_Text: {
      fontWeight: "bold",
      fontSize: 22,
      color: "000"
    },
    title: {
      color: '#333',
      size: 16,
      textTransform: 'uppercase',
      marginVertical: 10,
      marginLeft: 12,
      fontWeight: '800',
      flexDirection: 'row',
    },
    optionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 7
    },
    optext: {
      marginLeft: 12,
      color: '#555',
      fontSize: 16,
      fontWeight: '600'
    },
    touchable: {
      height: 20,
      width: 20,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#3EBD93',
      borderWidth: 2,
    },
    telhainput: {
      marginTop: 11,
      marginLeft: 35,
      backgroundColor: '#D9D9D9',
      fontSize: 14,
      width: 220,
      height: 40,
      borderRadius: 5,
      padding: 7
    },
    qtdinput: {
      marginTop: 50,
      marginLeft: 55,
      backgroundColor: '#D9D9D9',
      fontSize: 14,
      width: 120,
      height: 45,
      borderRadius: 5,
      padding: 12,
    },
    localinput: {
      color:'blue'
    }
  });

  export {css};
