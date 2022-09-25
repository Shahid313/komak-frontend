import React from "react";
import { SafeAreaView, Text,TouchableWithoutFeedback,ScrollView, TextInput,Keyboard, TouchableOpacity,ActivityIndicator } from "react-native";
import styles from "./styles";
import * as ImagePicker from "react-native-image-picker"
import Axios from "axios";
import baseUrl from "../../../baseUrl";
import Toast from 'react-native-toast-message';
import SimpleToast from 'react-native-simple-toast';

export default class Reply extends React.Component{
    state = {
        sender_message:'',
        isLoading:false
    }

      Send(){
        if(this.state.sender_message == ''){
            SimpleToast.show('Please Write the message', Toast.LONG);
        }else{
            this.setState({isLoading:true})
            let data = {
                'sender_message':this.state.sender_message,
                'email':this.props.route.params.email
            }
            
            Axios.post(baseUrl+'/apis/admin/reply', data).then((response) => {
                if(response.data.msg == "Reply Sent Successfully"){
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
                <TextInput onChangeText={(e) => this.setState({sender_message:e})} value={this.state.sender_message} multiline={true} style={styles.messageField} placeholder="Message"/>
                <TouchableOpacity onPress={() => this.Send()} style={styles.sendButton}>
                {
                    this.state.isLoading ? <ActivityIndicator color="#FFFFFF" animating={this.state.isLoading}/>:
                    <Text style={styles.sendButtonText}>Reply</Text>
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