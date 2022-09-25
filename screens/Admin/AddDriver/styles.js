import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingRight:'5%',
        paddingLeft:'5%',
        paddingTop:15
    },

    SignUpInfo:{
        marginTop:'8%',
        marginBottom:'12%'
    },

    SignUpText:{
        color:'#B2EE32',
        fontSize:28
    },

    EnterInfoText:{
        fontSize:16,
        marginTop:'3%',
        color:'#FFFFFF'
    },

    EnteringData:{
        width:'100%',

    },

    NameInput:{
        backgroundColor:'#F2F2F7',
        width:'100%',
        height:48,
        fontSize:17,
        color:'#0C0B0C',
        paddingLeft:10
    },

    EmailInput:{
        backgroundColor:'#F2F2F7',
        width:'100%',
        height:48,
        fontSize:17,
        color:'#0C0B0C',
        paddingLeft:10,
        marginTop:'3%',
        
    },

    PasswordInput:{
        backgroundColor:'#F2F2F7',
        width:'100%',
        height:48,
        fontSize:17,
        marginTop:'3%',
        color:'#0C0B0C',
        flexDirection:'row-reverse',
        justifyContent:'space-between'
    },

    ConfirmPasswordInput:{
        backgroundColor:'#F2F2F7',
        width:'100%',
        height:48,
        fontSize:17,
        marginTop:'3%',
        color:'#0C0B0C',
        flexDirection:'row-reverse',
        justifyContent:'space-between'
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

    SignUpButton:{
        width:'100%',
        height:48,
        backgroundColor:'#6667ab',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'3%'
    },

    SignUpButtonText:{
        color:'#FFFFFF',
        fontSize:20
    },

    EyeButton:{
        margin:12,
        marginRight:20,
    },

    SignInLink:{
        marginLeft:5
    },

    AlreadyHaveAccount:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'10%',
        marginBottom:'8%'
    },

    AlreadyHaveAccountSignInLink:{
        color:'#6667ab',
        fontSize:17
    },

    AlreadyHaveAccountText:{
        fontSize:17,
        color:'#000000'
    },

    dropDown:{
        marginTop:'3%',
        width:'100%',
        backgroundColor:'#6667ab',
        borderBottomColor:'#6667ab',
        borderBottomWidth:0.7,
        color:'#FFFFFF'
      },
})

export default styles;