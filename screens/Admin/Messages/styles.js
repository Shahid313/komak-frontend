import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingRight:'5%',
        paddingLeft:'5%',
        paddingTop:'3%'
    },

    messageBox:{
        width:'100%',
        backgroundColor:'#6667ab',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        padding:8,
        marginBottom:5
    }
})

export default styles