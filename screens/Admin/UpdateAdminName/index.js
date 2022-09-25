import React from "react";
import { SafeAreaView, Text,TouchableWithoutFeedback,ScrollView, TextInput,Keyboard, TouchableOpacity,ActivityIndicator } from "react-native";
import styles from "./styles";
import * as ImagePicker from "react-native-image-picker"
import Axios from "axios";
import baseUrl from "../../../baseUrl";
import Toast from 'react-native-simple-toast';
import axios from "axios";

export default class UpdateAdminName extends React.Component{

    state = {
            admin_name:'',
            admin_id:''

    }

    componentDidMount(){
        this.setState({admin_id:this.props.route.params.admin_id})
    }

    Update(){
        const data = {
            'admin_name':this.state.admin_name,
            'admin_id':this.state.admin_id
        }
        axios.post(baseUrl+`/apis/admin/update_admin_name`, data).then(response => {
            if(response.data.msg == "Admin name updated successfully"){
                this.props.navigation.goBack()
                Toast.show('The name has been updated', Toast.LONG);
            }
        })
    }

    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ScrollView style={{backgroundColor:'white'}}>
            <SafeAreaView style={styles.container}>
                <TextInput onChangeText={(e) => this.setState({admin_name:e})} value={this.state.sender_name} style={styles.nameField} placeholder="Name"/>
                <TouchableOpacity style={styles.sendButton}>
                    <Text onPress={() => this.Update()} style={styles.sendButtonText}>Update</Text>
                </TouchableOpacity>
            </SafeAreaView>
            </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}