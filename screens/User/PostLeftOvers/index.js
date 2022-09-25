import React from "react";
import { Alert, SafeAreaView, TouchableWithoutFeedback, Image, ScrollView, Text,Keyboard, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./styles";
//image picker
import * as ImagePicker from "react-native-image-picker"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from "axios";
import baseUrl from "../../../baseUrl";
import Geolocation from "@react-native-community/geolocation";
import Toast from 'react-native-toast-message';
import SimpleToast from 'react-native-simple-toast';

export default class PostLeftOvers extends React.Component{
    
    state = {
        leftOverName:'',
        postLocation:'',
        postDescription:'',
        postImage:'',
        user_id:'',
        latitude:"",
        longitude:"",
        isLoading:false

    }

    async userData(){
        const value = await AsyncStorage.getItem('loggedIn');
        const parsedData = JSON.parse(value)
        this.setState({user_id:parsedData._id})
    }
    GetCurrentLocation = ()=>{
           
            Geolocation.getCurrentPosition((res)=>{
                console.log(res)
                this.setState({latitude:res.coords.latitude,longitude:res.coords.longitude})
            },(err)=>{
                console.log(err)
            Alert.alert("Please Turn on the gps and also allow location to this app")

            }
        
            )
       
        
        
    }
    componentDidMount(){
        this.userData();
        this.GetCurrentLocation()


        setTimeout(()=>{
            this.GetCurrentLocation()
            console.log(this.state.latitude)
        },500)

       
    }

    choosePhoto(){
        const options = {
          noData:true
        };
        ImagePicker.launchImageLibrary(options, response => {
          console.log("response", response);
          if(response.didCancel){
            return false
          }
          if(response.assets[0].uri){
            this.setState({postImage:response.assets[0]});
          }
         
        });
      }

    Post(){
        if(this.state.latitude == "" || this.state.longitude == ""){
            Alert.alert("Please make sure that your gps is turned on and you have allowed location in this app.")
            this.GetCurrentLocation()
            return  false
        }

        if(this.state.leftOverName == '' || this.state.postLocation == '' || this.state.postDescription == ''){
              SimpleToast.show('Please fill all the fields', Toast.LONG);
        }else{
            this.setState({isLoading:true})
            console.log(this.state.postLocation)
            console.log(this.state.postImage)
            var postImage = {
                uri:this.state.postImage.uri,
                type:this.state.postImage.type,
                name:this.state.postImage.fileName
            }
            const data = new FormData()
            data.append("leftOverName",this.state.leftOverName)
            data.append("postLocation",this.state.postLocation)
            data.append("latitude",this.state.latitude)
            data.append("longitude",this.state.longitude)

            data.append("postDescription",this.state.postDescription)
            data.append("postImage",postImage)
            data.append("user_id",this.state.user_id)
            data.append("isApproved",false)

            Axios.post(baseUrl+'/apis/post/add_post', data, {
                headers: { "Content-type": "multipart/form-data" }
            }).then((response) => {
                if(JSON.parse(JSON.stringify(response.data.msg)) == "Post Added Successfully"){
                    Toast.show({
                        type: 'info',
                        text1: 'Post uploaded successfully',
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
                <TextInput onChangeText={(e) => this.setState({leftOverName:e})} style={styles.nameField} placeholder="Item name"/>
                <TextInput onChangeText={(e) => this.setState({postLocation:e})} style={styles.emailField} placeholder="Location"/>
                <TextInput onChangeText={(e) => this.setState({postDescription:e})}  multiline={true} style={styles.messageField} placeholder="Describe more"/>
                <TouchableOpacity onPress={() => this.choosePhoto()} style={styles.uploadImageButton}>
                <Text style={styles.uploadImageButtonText}>Select Image</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.Post()} style={styles.sendButton}>
                {
                    this.state.isLoading ? <ActivityIndicator color="#FFFFFF" animating={this.state.isLoading}/>:
                    <Text style={styles.sendButtonText}>Post</Text>
                }
                </TouchableOpacity>

                {this.state.postImage.fileName ?
                <Image style={{width:40, height:40, marginTop:5, borderRadius:4}} source={{uri:this.state.postImage.uri}}/>:
                null}
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