import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        paddingRight:'5%',
        paddingLeft:'5%'
    },

    nameField:{
        borderColor:'#6667ab',
        borderWidth:1,
        marginTop:'7%',
        paddingLeft:10,
        height:43,
        fontSize:17,
        color:'#6667ab',
        borderRadius:15
        
    },

    emailField:{
        borderColor:'#6667ab',
        borderWidth:1,
        marginTop:'5%',
        height:43,
        paddingLeft:10,
        fontSize:17,
        color:'#6667ab',
        borderRadius:15
    },

    messageField:{
        borderColor:'#6667ab',
        borderWidth:1,
        marginTop:'5%',
        paddingLeft:10,
        fontSize:17,
        paddingBottom:60,
        color:'#6667ab',
        borderRadius:15
    },

    uploadImageButton:{
        width:'100%',
        height:43,
        backgroundColor:'#6667ab',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:'5%',
        borderRadius:15,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    uploadImageButtonText:{
        color:'#FFFFFF',
        fontSize:17
    },

    sendButton:{
        width:'100%',
        height:43,
        backgroundColor:'#6667ab',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'5%',
        borderRadius:15,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginBottom:10
    },

    sendButtonText:{
        color:'#FFFFFF',
        fontSize:17
    }
})

export default styles;