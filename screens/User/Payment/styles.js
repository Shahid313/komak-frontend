import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        paddingRight:'4%',
        paddingLeft:'4%'
    },
    EmailInput:{
        backgroundColor:'#F2F2F7',
        width:'100%',
        height:47,
        fontSize:17,
        borderRadius:15,
        color:'#0C0B0C',
        paddingLeft:10,
        borderWidth:1,
        borderColor:'#6667ab',
        marginBottom:'5%'
        
    },

    LoginButton:{
        width:'100%',
        height:47,
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
    },

    LoginButtonText:{
        color:'#FFFFFF',
        fontSize:20
    },
})

export default styles;