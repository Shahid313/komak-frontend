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
        backgroundColor:'white',
        width:'42%',
        height:170,
        paddingRight:10,
        paddingLeft:10,
        paddingTop:10,
        marginBottom:20,
        shadowColor: '#000000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation:3.25
    },

    productImage:{
        width:'100%', 
        height:'75%',
    },

    itemNameBox:{
        height:'25%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },

    itemName:{
        color:'#6667ab',
        fontSize:20
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
    }
})

export default styles;