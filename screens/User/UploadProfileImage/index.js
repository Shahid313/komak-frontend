import React from "react";
import {Text,ActivityIndicator, Image,  SafeAreaView, TouchableOpacity, View,Alert, Keyboard, TouchableWithoutFeedback, TextInput,ScrollView} from 'react-native'
import styles from "./styles";
import axios from "axios";
import baseUrl from "../../../baseUrl";
import * as ImagePicker from "react-native-image-picker"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

export default class UploadProfileImage extends React.Component{

    state = {
        profileImage:'',
        user_id:'',
        isLoading:false
    }

    async userData(){
        const value = await AsyncStorage.getItem('loggedIn');
        const parsedData = JSON.parse(value)
        this.setState({user_id:parsedData._id})
    }
    componentDidMount(){
        this.userData();
    }

    choosePhoto(){
        const options = {
          noData:true
        };
        ImagePicker.launchImageLibrary(options, response => {
            if(response.didCancel){
                console.log("Image uploading canceled")
              }else if(response.assets[0].uri){
            this.setState({profileImage:response.assets[0]});
          }
        });
      }

      uploadImage(){
        this.setState({isLoading:true})
        var profileImage = {
            uri:this.state.profileImage.uri,
            type:this.state.profileImage.type,
            name:this.state.profileImage.fileName
        }
        
        const data = new FormData()
            data.append("user_id",this.state.user_id)
            data.append("profileImage",profileImage)

            axios.post(baseUrl+'/apis/user/profile_image', data, {
                headers: { "Content-type": "multipart/form-data" }
            }).then((response) => {
                if(JSON.parse(JSON.stringify(response.data.msg)) == "Profile Image Uploaded Succesfully"){
                    Toast.show({
                        type: 'info',
                        text1: "Profile image uploaded successfully",
                      });
                      this.setState({isLoading:false})
                }
            
            }) 

      }
    
    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView style={{backgroundColor:'#FFFFFF', paddingTop:15}}>
            <SafeAreaView style={styles.container}>
           
            <TouchableOpacity onPress={() => this.choosePhoto()} style={styles.SignUpButton}>
                    <Text style={styles.SignUpButtonText}>Choose Image</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.uploadImage()} style={styles.SignUpButton}>
            {
                    this.state.isLoading ? <ActivityIndicator color="#FFFFFF" animating={this.state.isLoading}/>:
                    <Text style={styles.SignUpButtonText}>Upload image</Text>
            }
            </TouchableOpacity>
            {this.state.profileImage.fileName ?
            <Image style={{width:120, height:120, marginTop:10, alignSelf:'center'}} source={{uri:this.state.profileImage.uri}}/>:
            null
            }
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