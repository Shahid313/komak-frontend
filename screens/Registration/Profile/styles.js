import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingRight:'10%',
        paddingLeft:'10%',
    },

    ProfileImage:{
        width:80,
        height:80,
        borderRadius:40,
    },

    ProfileImageAndName:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        marginTop:20
    },

    NameAndChangePassword:{
        flexDirection:'column',
        marginLeft:15
    },

    Name:{
        fontSize:22,
        fontWeight:'bold',
    },

    logoutButton:{
        width:120,
        height:33,
        backgroundColor:'#6667ab',
        shadowColor: '#000000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation:3.25,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    },

    logoutText:{
        color:'white',
        fontSize:17,
    }
})

export default styles