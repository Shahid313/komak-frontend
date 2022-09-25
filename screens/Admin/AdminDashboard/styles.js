import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#6667ab'
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
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },

    itemName:{
        color:'#6667ab',
        fontSize:20
    },

    ProfileDetails:{
        width:'100%',
        height:90,
        paddingLeft:20,
        paddingTop:10
    },

    ImageAnName:{
        flexDirection:'row'
    },

    ProfileImage:{
        width:60,
        height:60,
        backgroundColor:'white',
        borderRadius:30
    },

    WelcomeAndName:{
        flexDirection:'column',
        justifyContent:'flex-start',
        marginLeft:10
    },

    welcome:{
        fontSize:17,
        color:'white'

    },

    ProfileName:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
    },

    NameAndEdit:{
        flexDirection:'row'
    },

    AdminBoxes:{
        width:'100%',
        height:170,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:15,
        paddingRight:15
    },

    leftBox:{
        width:'48%',
        height:'100%',
        flexDirection:'column',
        justifyContent:'space-between'
    },

    rightBox:{
        width:'48%',
        height:'100%',
        flexDirection:'column',
        justifyContent:'space-between'
    },

    Box1:{
        width:'100%',
        height:'46%',
        backgroundColor:'white',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },

    Box2:{
        width:'100%',
        height:'46%',
        backgroundColor:'white',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },

    Box3:{
        width:'100%',
        height:'46%',
        backgroundColor:'white',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },

    Box4:{
        width:'100%',
        height:'46%',
        backgroundColor:'white',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },

    BoxText:{
        color:'#6667ab',
        fontSize:18,
    }
})

export default styles