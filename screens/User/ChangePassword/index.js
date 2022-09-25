import React from "react";
import {Text, Image,  SafeAreaView, TouchableOpacity, View,Alert, Keyboard, TouchableWithoutFeedback, TextInput,ScrollView} from 'react-native'
import styles from "./styles";
import axios from "axios";
import baseUrl from "../../../baseUrl";
import * as ImagePicker from "react-native-image-picker"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class UpdateUserInfo extends React.Component{
    state = {
        showPass:false,
        showConfirmPass:false,
        new_password:'',
        confirmPassword:'',
        user_id:''
    }

    componentDidMount(){
        this.userData()
    }

    async userData(){
        const value = await AsyncStorage.getItem('loggedIn');
        const parsedData = JSON.parse(value)
        this.setState({user_id:parsedData._id})
    }

    Change(){
        if(this.state.password == '' || this.state.confirmPassword == ''){
            alert('Please fill all the fields')
        }else if(this.state.new_password != this.state.confirmPassword){
            alert("Passwords does not match")
        }else{
            let data = {
                'user_id':this.state.user_id,
                'new_password':this.state.new_password
            }
          
            axios.post(baseUrl+'/apis/user/update_password', data).then(response => {
                if(response.data.msg == "Password updated succesfully"){
                    alert("Password updated please sign in again")
                    AsyncStorage.removeItem('loggedIn')
                    this.props.navigation.navigate('SignIn')
                }
            })
        }   
    }

    
    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView style={{backgroundColor:'#FFFFFF', paddingTop:15}}>
            <SafeAreaView style={styles.container}>
                
                <View style={styles.EnteringData}>
                    
                <View style={styles.PasswordInput}>
                {this.state.showPass == true ? 
                <TouchableOpacity onPress={() => this.setState({showPass: !(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showPass: !(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../../assets/crosseye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>
                }
                <TextInput onChangeText={(e) => this.setState({new_password:e})} placeholderTextColor="#929292" secureTextEntry={this.state.showPass} placeholder="New Password" style={styles.InputField}/>
               </View>

               <View style={styles.PasswordInput}>
                {this.state.showPass == true ? 
                <TouchableOpacity onPress={() => this.setState({showConfirmPass: !(this.state.showConfirmPass)})} style={styles.EyeButton}>
                <Image source={require('../../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showConfirmPass: !(this.state.showConfirmPass)})} style={styles.EyeButton}>
                <Image source={require('../../../assets/crosseye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>
                }
                <TextInput onChangeText={(e) => this.setState({confirmPassword:e})} placeholderTextColor="#929292" secureTextEntry={this.state.showConfirmPass} placeholder="Confirm New password" style={styles.InputField}/>
               </View>
           
            <TouchableOpacity onPress={() => this.Change()} style={styles.SignUpButton}>
                    <Text style={styles.SignUpButtonText}>Change</Text>
            </TouchableOpacity>
                </View>
            </SafeAreaView>
            </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}