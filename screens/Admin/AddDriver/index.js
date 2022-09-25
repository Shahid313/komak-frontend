import React from "react";
import {Text, Image, ActivityIndicator, SafeAreaView, TouchableOpacity, View,Alert, Keyboard, TouchableWithoutFeedback, TextInput,ScrollView} from 'react-native'
import styles from './styles'
//dropdown
import SelectDropdown from 'react-native-select-dropdown'
//icons
import MIcon from 'react-native-vector-icons/MaterialIcons'
//baseUrl
import baseUrl from '../../../baseUrl';
//axios
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import SimpleToast from 'react-native-simple-toast';

class AddDriver extends React.Component{

    state = {
        showPass:true,
        showConfirmPass:true,
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        isLoading:false,
        hasNumber:/\d/,
        specialChars:/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
        validateEmail:/^(([^<>()\[\]\\.,;:\s"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }

    

    componentDidMount(){
        _retrieveData(this.props.navigation);
    }


    Register(){
        this.setState({isLoading:true})
        let data = {
            "name":this.state.name,
            "email":this.state.email,
            "password":this.state.password,
            "user_reg_cat":"driver",
        }
        if(this.state.name = '' || this.state.email == '' || this.state.password == '' || this.state.confirmPassword == ''){
            Alert.alert("Please fill all fields")
        }else if(this.state.password != this.state.confirmPassword){
            SimpleToast.show('Passwords does not match', Toast.LONG);
        }else{
            axios.post(baseUrl+'/apis/user/signup', data).then(res => {
                if(res.data.msg == "User Registered Successfully"){
                    Toast.show({
                        type: 'info',
                        text1: 'User Registered Successfully',
                      });
                      this.setState({isLoading:false})
                }else{
                    Alert.alert("Something went wrong")
                    this.setState({isLoading:false})
                }
            })
        }
        
    }

    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView style={{backgroundColor:'#FFFFFF'}}>
            <SafeAreaView style={styles.container}>
                
                <View style={styles.EnteringData}>
                    <TextInput onChangeText={(e) => this.setState({name:e})} style={styles.NameInput} placeholderTextColor="#929292" placeholder="Name"/>
                    {this.state.hasNumber.test(this.state.name) || this.state.specialChars.test(this.state.name) ?
                        <Text style={{color:'red', marginTop:2}}>Numbers or special characters are not allowed</Text>:null}
                    <TextInput onChangeText={(e) => this.setState({email:e})} style={styles.EmailInput} placeholderTextColor="#929292" placeholder="Email"/>
                    {this.state.validateEmail.test(this.state.email) == false && this.state.email != '' ? 
                    <Text style={{color:'red', marginTop:2}}>Please enter a valid email</Text>:
                    null
                    }
                <View style={styles.PasswordInput}>
                {this.state.showPass == true ? 
                <TouchableOpacity onPress={() => this.setState({showPass: !(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showPass: !(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../../assets/crosseye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>
                }
                

                <TextInput onChangeText={(e) => this.setState({password:e})} placeholderTextColor="#929292" secureTextEntry={this.state.showPass} placeholder="Password" style={styles.InputField}/>

               </View>
               {this.state.password.length > 0 && this.state.password.length < 8 ?
                        <Text style={{color:'red', marginTop:2}}>Password should be minimum 8 characters</Text>:null}
               <View style={styles.ConfirmPasswordInput}>
                {this.state.showConfirmPass == true ? 
                <TouchableOpacity onPress={() => this.setState({showConfirmPass:!(this.state.showConfirmPass)})} style={styles.EyeButton}>
                <Image source={require('../../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showConfirmPass:!(this.state.showConfirmPass)})} style={styles.EyeButton}>
                <Image source={require('../../../assets/crosseye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>
                }
                
                <TextInput onChangeText={(e) => this.setState({confirmPassword:e})} placeholderTextColor="#929292" secureTextEntry={this.state.showConfirmPass} placeholder="Confirm Password" style={styles.InputField}/>

               </View>
               {this.state.hasNumber.test(this.state.name) || this.state.specialChars.test(this.state.name) || this.state.password.length > 0 && this.state.password.length < 8 || this.state.validateEmail.test(this.state.email) == false ? 
            <View onPress={() => this.SignUp()} style={styles.SignUpButton}>
                    <Text style={styles.SignUpButtonText}>Register</Text>
            </View>:
            <TouchableOpacity onPress={() => this.Register()} style={styles.SignUpButton}>
            {
                    this.state.isLoading ? <ActivityIndicator color="#FFFFFF" animating={this.state.isLoading}/>:
                    <Text style={styles.SignUpButtonText}>Register</Text>
            }
            </TouchableOpacity>}
                </View>
                <Toast
        position='top'
        bottomOffset={20}
      />
            </SafeAreaView>
            </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}

export default AddDriver;