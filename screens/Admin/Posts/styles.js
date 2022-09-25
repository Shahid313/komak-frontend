import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
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
        width:'100%',
        height:370,
        marginBottom:20,
        shadowColor: '#000000',
    shadowOffset: {width: -2, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation:1.25,
    },

    productImage:{
        width:'100%', 
        height:'80%',
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

    itemNameBox:{
        height:'25%',
        width:'100%',
        paddingTop:7,
        paddingLeft:15,
        paddingRight:15
    },

    itemName:{
        color:'black',
        fontSize:18
    },
})

export default styles