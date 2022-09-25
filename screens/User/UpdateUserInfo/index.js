import React from "react";
import {Text, Image,  SafeAreaView, TouchableOpacity, View,Alert, Keyboard, TouchableWithoutFeedback, TextInput,ScrollView} from 'react-native'
import styles from "./styles";
import axios from "axios";
import baseUrl from "../../../baseUrl";
import * as ImagePicker from "react-native-image-picker"

export default class UpdateUserInfo extends React.Component{
    state = {
        showPass:false,
        name:'',
        email:'',
        password:''
    }

    UpdateUserInfo(){
        let data = {
            "email":this.state.email,
            "password":this.state.password
        }

        if(this.state.email == '' || this.state.password == ''){
            Alert.alert("Please fill all the fields")
        }else{
            axios.post(baseUrl+'/apis/user/login_for_changing_password', data).then(
                res => {
                    if(res.data.msg == 'logged in Succesfully'){
                        this.props.navigation.navigate('ChangePassword')
                    }else{
                        alert("The password or email is incorrect")
                    }
                }
            )
        }
        
    }
    
    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView style={{backgroundColor:'#FFFFFF', paddingTop:15}}>
            <SafeAreaView style={styles.container}>
                
                <View style={styles.EnteringData}>
                    <TextInput onChangeText={(e) => this.setState({email:e})} style={styles.EmailInput} placeholderTextColor="#929292" placeholder="Current Email"/>
                    
                <View style={styles.PasswordInput}>
                {this.state.showPass == true ? 
                <TouchableOpacity onPress={() => this.setState({showPass: !(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showPass: !(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../../assets/crosseye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>
                }
                

                <TextInput onChangeText={(e) => this.setState({password:e})} placeholderTextColor="#929292" secureTextEntry={this.state.showPass} placeholder="Current Password (Required)" style={styles.InputField}/>

               </View>
           
            <TouchableOpacity onPress={() => this.UpdateUserInfo()} style={styles.SignUpButton}>
                    <Text style={styles.SignUpButtonText}>Continue</Text>
            </TouchableOpacity>
                </View>
            </SafeAreaView>
            </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}