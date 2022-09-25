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
        paddingTop:'2.5%',
        paddingBottom:'2.5%'
    },

    ItemName:{
        fontSize:18,
        fontWeight:'bold',
        color:'#000000'
    },

    ItemLocationBox:{
        paddingBottom:'2.5%'
    },

    ItemLocation:{
        fontSize:18,
        fontWeight:'bold',
        color:'#000000'
    },

    PostDescription:{
        marginTop:5,
        fontSize:16,
        color:'#000000'
    },

    approveButton:{
        backgroundColor:'#6667ab',
        width:100,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
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
        fontSize:16
    },

    approveButtonBox:{
        paddingTop:'2.5%'
    },

    approvedButton:{
        backgroundColor:'gray',
        width:100,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
    },

    approvedButtonText:{
        color:'white',
        fontSize:16
    }
})

export default styles;