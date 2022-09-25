import React from "react";
import {Text, Image,  SafeAreaView, TouchableOpacity,ActivityIndicator, View, Keyboard,ScrollView, TouchableWithoutFeedback, TextInput, Alert} from 'react-native'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import baseUrl from '../../../baseUrl'

import Toast from 'react-native-simple-toast';

class SignIn extends React.Component{

    state = {
        showPass:true,
        email:'',
        password:'',
        isLoading:false
    }

    

    validateEmail() {
        var re = /^(([^<>()\[\]\\.,;:\s"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(this.state.email);
      };

    Login(){
        this.setState({isLoading:true})
        let data = {
            "email":this.state.email,
            "password":this.state.password
        }
        
        if(this.state.email == '' || this.state.password == ''){
            this.setState({isLoading:false})
            Toast.show('Please fill all the fields', Toast.LONG);
        }else if(this.validateEmail() == false){
            this.setState({isLoading:false})
            Toast.show('Please enter a valid email', Toast.LONG);
        }else{
            axios.post(baseUrl+'/apis/user/signin', data).then(
                res => {
                    if(res.data.msg == 'logged in Succesfully'){
                        AsyncStorage.setItem(
                            'loggedIn',
                            JSON.stringify({"_id":res.data.user._id, "name":res.data.user.name, "email":res.data.user.email, "user_reg_cat":res.data.user.user_reg_cat, "image":res.data.user.image}) 
                          );
                          if(res.data.user.user_reg_cat === 'driver'){
                            this.setState({isLoading:false})
                            this.props.navigation.reset({
                                index:0,
                                routes:[{name:'Driver'}],
                               
                            });
                            Toast.show('Logged in successfully', Toast.LONG);
                          }else if(res.data.user.user_reg_cat === 'admin'){
                            this.setState({isLoading:false})
                            this.props.navigation.reset({
                                index:0,
                                routes:[{name:'Admin'}],
                               
                            });
                            Toast.show('Logged in successfully', Toast.LONG);
                          }else{
                            this.setState({isLoading:false})
                            this.props.navigation.reset({
                                index:0,
                                routes:[{name:'main'}],
                               
                            });
                            Toast.show('logged in successfully.', Toast.LONG);
                          }
                    }else{
                        this.setState({isLoading:false})
                        Toast.show('The password or email is incorrect', Toast.LONG);
                    }
                }
            )
        }
        
    }

    GoToSignUpScreen(){
        this.props.navigation.navigate('SignUp')
    }

    ForgotPass = () => {
        this.props.navigation.navigate("ForgotPassword")
    }


    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ScrollView style={{backgroundColor:'white'}}>
            <SafeAreaView style={styles.container}>
                
            <View style={{width:'100%', marginTop:'10%', marginBottom:'12%',alignItems:'center'}}>
                    <Image style={{width:192, height:192,}} source={require('../../../assets/logo2.png')}/> 
                </View>
                
                <View style={styles.EnteringData}>
                    <TextInput onChangeText={(e) => this.setState({email:e})} style={styles.EmailInput} placeholderTextColor="#929292" placeholder="Email"/>
                    
                <View style={styles.PasswordInput}>
                {this.state.showPass == true ? 
                <TouchableOpacity onPress={() => this.setState({showPass:!(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showPass:!(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../../assets/crosseye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>
                }
                

                <TextInput onChangeText={(e) => this.setState({password:e})} placeholderTextColor="#929292" secureTextEntry={this.state.showPass} placeholder="Password" style={styles.InputField}/>

            </View>
            <View style={{width:'100%', marginTop:10}}>
                            <TouchableOpacity onPress={() => this.ForgotPass()}>
                                <Text style={{textAlign:'right'}}>Forgot Password</Text>
                                </TouchableOpacity>
                        </View>
            <TouchableOpacity onPress={() => this.Login()} style={styles.LoginButton}>
            {
                    this.state.isLoading ? <ActivityIndicator color="#FFFFFF" animating={this.state.isLoading}/>:
                    <Text style={styles.LoginButtonText}>Login</Text>}
            </TouchableOpacity>
            <View style={styles.DontHaveAccount}>
                <Text style={styles.DontHaveAccountText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => this.GoToSignUpScreen()} style={styles.SignUpLink}>
                    <Text style={styles.DontHaveAccountSignUpLink}>Sign Up</Text>
                </TouchableOpacity>
            </View>
                </View>
            </SafeAreaView>
            </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}

export default SignIn;