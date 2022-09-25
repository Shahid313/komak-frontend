import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity,ScrollView, Image } from "react-native";
import styles from "./styles";
//icons
import Icon from 'react-native-vector-icons/Fontisto';
import ADIcon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import axios from "axios";
//baseUrl
import baseUrl from "../../../baseUrl";
import * as ImagePicker from "react-native-image-picker"

class Account extends React.Component{
    state = {
        posts:[],
    }
    logout(){
        AsyncStorage.removeItem('loggedIn')
        this.props.navigation.navigate('SignIn')
    }
    componentDidMount(){
        this.getUserPosts();
        this.props.navigation.addListener("focus",()=>{
        this.getUserPosts();
        })
        
    }
    AdminContact(){
        this.props.navigation.navigate('ContactAdmin')
    }

    async getUserPosts(){
        const value = await AsyncStorage.getItem('loggedIn');
        const parsedData = JSON.parse(value)
        axios.get(baseUrl+`/apis/post/get_specific_user_posts?user_id=${parsedData._id}`).then(response => {
            console.log(response.data.item)
            this.setState({posts:response.data.item})
        })
    }

    PostDetails(post_id){
        this.props.navigation.navigate('PostDetails', {"post_id":post_id})
    }

    

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>

                <View style={styles.allProducts}>

                {
                this.state.posts.length > 0 ?
                this.state.posts.map((post) => (
                    <TouchableOpacity onPress={() => this.PostDetails(post._id)} key={post._id} style={styles.ProductCard}>
                    <Image style={styles.productImage} source={{uri:baseUrl+'/uploads/'+post.post_image}}/>
                    {post.isApproved == false ? 
                    <View style={{position:'absolute', backgroundColor:"#6667ab", left:'10%', top:'10%', padding:5}}>
                    <Text style={{color:'white', fontSize:20}}>Pending</Text>
                    </View>:
                    null}
                    <View style={styles.itemNameBox}>
                        <Text style={styles.itemName}>{post.post_name}</Text>
                    </View>
                    </TouchableOpacity>
                )):
                <Image style={{flex:1}} source={require('../../../assets/empty.jpg')}/>
                }
                
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Account