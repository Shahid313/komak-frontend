import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        paddingLeft:'5%',
        paddingRight:'5%'
    },

    LoginInfo:{
        marginTop:'8%',
        marginBottom:'12%'
    },

    LoginText:{
        color:'#B2EE32',
        fontSize:28,
    },

    EnterEmailText:{
        fontSize:16,
        marginTop:'3%',
        color:'#FFFFFF'
    },

    EnteringData:{
        width:'100%',
    },

    EmailInput:{
        backgroundColor:'#F2F2F7',
        width:'100%',
        height:47,
        fontSize:17,
        color:'#0C0B0C',
        paddingLeft:10,
        borderWidth:1,
        borderColor:'#6667ab',
        borderRadius:15
        
    },

    PasswordInput:{
        backgroundColor:'#F2F2F7',
        width:'100%',
        height:47,
        fontSize:17,
        marginTop:'5%',
        color:'#0C0B0C',
        flexDirection:'row-reverse',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:'#6667ab',
        borderRadius:15
    },

    imageStyle: {
        padding: 0,
        height: 24,
        width: 24,
        resizeMode: 'stretch',
        alignItems: 'center',
    },

    InputField:{
        flex:1,
        fontSize:17,
        color:'#0C0B0C',
        paddingLeft:10
    },

    LoginButton:{
        width:'100%',
        height:47,
        backgroundColor:'#6667ab',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'10%',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius:15
    },

    LoginButtonText:{
        color:'#FFFFFF',
        fontSize:20
    },

    EyeButton:{
        margin:12,
        marginRight:20,
    },

    SignUpLink:{
        marginLeft:5
    },

    DontHaveAccount:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'7%',
        marginBottom:'10%'
    },

    DontHaveAccountSignUpLink:{
        color:'#6667ab',
        fontSize:17
    },

    DontHaveAccountText:{
        fontSize:17,
        color:'#000000'
    },
})

export default styles;