import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },

    PostImageBox:{
        width:'100%',
        height:'40%'
    },

    PostInfoBox:{
        paddingRight:'5%',
        paddingLeft:'5%',
        width:'100%',
        height:'60%'
    },

    PostImage:{
        width:'100%',
        height:'100%'
    },

    ItemNameBox:{
        paddingTop:'2%',
        marginTop:20,
        paddingBottom:'2%',
        backgroundColor:'#6667ab'
    },

    ItemName:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        marginLeft:10
    },

    ItemLocationBox:{
        paddingTop:'1%',
        paddingBottom:'1.5%',
        marginTop:10,
        backgroundColor:'#6667ab'

    },

    ItemLocation:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        marginLeft:10
    },

    PostDescription:{
        marginTop:5,
        fontSize:16,
        color:'#000000'
    },

    approveButton:{
        backgroundColor:'#6667ab',
        width:80,
        height:32,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    approveButtonText:{
        color:'#FFFFFF',
        fontSize:14
    },

    approvedButton:{
        backgroundColor:'gray',
        width:80,
        height:32,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16
    },

    approvedButtonText:{
        color:'#FFFFFF',
        fontSize:14
    },

    approveButtonBox:{
        flexDirection:'row',
        marginTop:10
    }
})

export default styles;