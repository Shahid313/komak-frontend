import React from "react";
import {Text, Image,  SafeAreaView, ActivityIndicator, TouchableOpacity, View,Alert, Keyboard, TouchableWithoutFeedback, TextInput,ScrollView} from 'react-native'
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
import Toast from 'react-native-simple-toast';

_retrieveData = async (navigation) => {

    const value = await AsyncStorage.getItem('loggedIn');
    const parse = JSON.parse(value)
    if (parse != null) {
        if(parse.user_reg_cat === 'driver'){
            navigation.reset({
                index:0,
                routes:[{name:'Driver'}],
               
            });
        }else if(parse.user_reg_cat === 'admin'){

        }else{
            navigation.reset({
                index:0,
                routes:[{name:'main'}],
               
            });
        }
      
    }else{
        return false
    }
  
};

class SignUp extends React.Component{

    state = {
        username:"",
        showPass:true,
        showConfirmPass:true,
        email:'',
        password:'',
        confirmPassword:'',
        user_reg_cat:'',
        isLoading:false,
        hasNumber:/\d/,
        specialChars:/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
        validateEmail:/^(([^<>()\[\]\\.,;:\s"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }

    

    componentDidMount(){
        _retrieveData(this.props.navigation);
    }

    
    SignUp(){
        let data = {
            name:this.state.username,
            email:this.state.email,
            password:this.state.password,
            user_reg_cat:this.state.user_reg_cat
        }
        this.setState({isLoading:true})
        if(this.state.name = '' || this.state.email == '' || this.state.password == '' || this.state.confirmPassword == '' || this.state.user_reg_cat == ''){
            Toast.show('Please fill all fields', Toast.LONG);
            this.setState({isLoading:false})
        }else if(this.state.password != this.state.confirmPassword){
            Toast.show('Passwords does not match', Toast.LONG);
            this.setState({isLoading:false})
        }else{
            axios.get(baseUrl+`/apis/user/email_verification?email=${this.state.email}`).then(res => {
                if(res.data.msg == "OTP sent"){
                    this.props.navigation.navigate('OTP', {"data":{"code":res.data.code, data}})
                    this.setState({isLoading:false})
                }else{
                    Alert.alert("This email already exists")
                    this.setState({isLoading:false})
                }
            })
        }
        
    }

    LoginScreen(){
        this.props.navigation.navigate('SignIn')
    }

    regCat = ["Organization", "Business Community", "Individual"]

    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView style={{backgroundColor:'#FFFFFF'}}>
            <SafeAreaView style={styles.container}>
            <View style={{width:'100%', marginTop:'10%', marginBottom:'12%',alignItems:'center'}}>
                    <Image style={{width:192, height:192,}} source={require('../../../assets/logo2.png')}/> 
                </View>
                
                <View style={styles.EnteringData}>
                    <TextInput onChangeText={(e) => {this.setState({username:e})}} style={styles.NameInput} placeholderTextColor="#929292" placeholder="Name"/>
                    {this.state.hasNumber.test(this.state.username) || this.state.specialChars.test(this.state.username) ?
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
               
               <SelectDropdown
                renderDropdownIcon={() => (
                    <MIcon name="keyboard-arrow-down" color="#FFFFFF" size={23} />
                )}
                 defaultButtonText="Categories"
                 buttonTextStyle={{
                        color:'#FFFFFF'
                    }}
                    selectedRowStyle={{
                        backgroundColor:'#6667ab',
                    }}
                    selectedRowTextStyle={{
                        color:'#FFFFFF'
                    }}
                    rowTextStyle={{color:'#6667ab'}}
                 buttonStyle={styles.dropDown}
	             data={this.regCat}
	             onSelect={(selectedItem, index) => {
                    this.setState({user_reg_cat:selectedItem})
	             }}
	            buttonTextAfterSelection={(selectedItem, index) => {
		        // text represented after item is selected
		        // if data array is an array of objects then return selectedItem.property to render after item is selected
		        return selectedItem
	            }}
	            rowTextForSelection={(item, index) => {
		        // text represented for each item in dropdown
		        // if data array is an array of objects then return item.property to represent item in dropdown
		        return item
	            }}
                />
            {this.state.hasNumber.test(this.state.username) || this.state.specialChars.test(this.state.username) || this.state.password.length > 0 && this.state.password.length < 8 || this.state.validateEmail.test(this.state.email) == false ? 
            <View onPress={() => this.SignUp()} style={styles.SignUpButton}>
                    <Text style={styles.SignUpButtonText}>Sign up</Text>
            </View>:
            <TouchableOpacity onPress={() => this.SignUp()} style={styles.SignUpButton}>
            {
                    this.state.isLoading ? <ActivityIndicator color="#FFFFFF" animating={this.state.isLoading}/>:
                    <Text style={styles.SignUpButtonText}>Sign up</Text>}
            </TouchableOpacity>
            }
            

            <View style={styles.AlreadyHaveAccount}>
                <Text style={styles.AlreadyHaveAccountText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => this.LoginScreen()} style={styles.SignInLink}>
                    <Text style={styles.AlreadyHaveAccountSignInLink}>Login</Text>
                </TouchableOpacity>
            </View>
                </View>
            </SafeAreaView>
            </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}

export default SignUp;