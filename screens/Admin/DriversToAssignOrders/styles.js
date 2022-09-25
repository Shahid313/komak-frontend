import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1
    },

    profile:{
        width:'100%',
        height:100,
        backgroundColor:'#6667ab',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },

    avatar:{
        width:60,
        height:60,
        borderRadius:30,
        backgroundColor:'#FFFFFF'
    },

    profileName:{
        color:'#FFFFFF',
        fontSize:23,
        fontWeight:'bold'
    },

    actionLinks:{
        marginTop:'5%',
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:'2%'
    },

    postLeftOvers:{
        fontSize:25,
        color:'#6667ab'
    },

    contactAdmin:{
        fontSize:25,
        color:'#6667ab'
    },

    allProducts:{
        width:'100%',
        paddingTop:15,
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around'
    },

    ProductCard:{
        width:'42%',
        height:160,
        marginBottom:20,
        borderWidth:2,
        borderColor:'#6667ab',
    },

    productImage:{
        width:'100%',
        height:'70%'
    },

    heartIcon:{
        left:'80%',
        top:'5%',
        position:'absolute'
    },

    productName:{
        color:'white',
        fontSize:16
    },

    productPrice:{
        color:'white',
        fontSize:16
    },

    usernameBox:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#6667ab',
        height:'30%'
    },

    username:{
        color:'#FFFFFF',
        fontSize:21
    }
})

export default styles;