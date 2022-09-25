import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        paddingRight:'5%',
        paddingLeft:'5%'
    },

    messageField:{
        borderColor:'#6667ab',
        borderWidth:1,
        marginTop:'5%',
        paddingLeft:10,
        borderRadius:15,
        fontSize:17,
        paddingBottom:100,
        color:'#6667ab'
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
        marginBottom:5
    },

    sendButtonText:{
        color:'#FFFFFF',
        fontSize:20
    }
})

export default styles;