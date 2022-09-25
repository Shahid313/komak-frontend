import React from "react";
import { SafeAreaView, Text,TouchableWithoutFeedback,ScrollView, TextInput,Keyboard, TouchableOpacity,ActivityIndicator } from "react-native";
import styles from "./styles";
import * as ImagePicker from "react-native-image-picker"
import Axios from "axios";
import baseUrl from "../../../baseUrl";
import Toast from 'react-native-toast-message';
import SimpleToast from 'react-native-simple-toast';

export default class ContactAdmin extends React.Component{
    state = {
        sender_name:'',
        sender_email:'',
        sender_message:'',
        isLoading:false
    }

      Send(){
        if(this.state.sender_name == '' || this.state.sender_email == '' || this.state.sender_message == ''){
            SimpleToast.show('Please fill all the fields', Toast.LONG);
        }else{
            this.setState({isLoading:true})
            let data = {
                'sender_name':this.state.sender_name,
                'sender_email':this.state.sender_email,
                'sender_message':this.state.sender_message
            }
            
            Axios.post(baseUrl+'/apis/admin/send_admin_message', data).then((response) => {
                if(response.data.msg == "Message Sent Successfully"){
                    this.setState({sender_name:''})
                    this.setState({sender_email:''})
                    this.setState({sender_message:''})
                    Toast.show({
                        type: 'info',
                        text1: 'Message sent sucessfully',
                      });

                      this.setState({isLoading:false})
                }
            })

    }
}

    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ScrollView style={{backgroundColor:'white'}}>
            <SafeAreaView style={styles.container}>
                <TextInput onChangeText={(e) => this.setState({sender_name:e})} value={this.state.sender_name} style={styles.nameField} placeholder="Name"/>
                <TextInput onChangeText={(e) => this.setState({sender_email:e})} value={this.state.sender_email} style={styles.emailField} placeholder="Email"/>
                <TextInput onChangeText={(e) => this.setState({sender_message:e})} value={this.state.sender_message} multiline={true} style={styles.messageField} placeholder="Message"/>
                <TouchableOpacity onPress={() => this.Send()} style={styles.sendButton}>
                {
                    this.state.isLoading ? <ActivityIndicator color="#FFFFFF" animating={this.state.isLoading}/>:
                    <Text style={styles.sendButtonText}>Send</Text>
                }
                </TouchableOpacity>
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