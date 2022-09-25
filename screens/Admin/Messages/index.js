import React from "react";
import {SafeAreaView, Text, ScrollView, TouchableWithoutFeedback,Keyboard, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import baseUrl from "../../../baseUrl";
import axios from "axios";

export default class Messages extends React.Component{
    state = {
        messages:[]
    }
    componentDidMount(){
        axios.get(baseUrl+'/apis/admin/messages').then(response => {
            this.setState({messages:response.data.messages})
        })
    }

    Reply(email){
        this.props.navigation.navigate('Reply', {"email":email})
    }
    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView style={{backgroundColor:'#FFFFFF'}}>
            <SafeAreaView style={styles.container}>
            {this.state.messages.map((message) => (
                    <View key={message._id} style={styles.messageBox}>
                    <Text style={{color:'#FFFFFF', fontSize:18}}>From: {message.sender_name}</Text>
                    <Text style={{color:'#FFFFFF', fontSize:18}}>Email: {message.sender_email}</Text>
                    <View style={{width:'100%', height:1, backgroundColor:'#FFFFFF', marginTop:10,marginBottom:5}}></View>
                    <Text style={{color:'#FFFFFF', fontSize:17}}>{message.sender_message}</Text>
                    <View style={{width:'100%', padding:10, alignItems:'flex-end'}}>
                        <TouchableOpacity onPress={() => this.Reply(message.sender_email)} style={{width:80, height:30, borderRadius:10, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'#6667ab', fontSize:16}}>Reply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                ))}
                
            </SafeAreaView>
            </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}