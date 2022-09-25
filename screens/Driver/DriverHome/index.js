import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity,ScrollView, Image } from "react-native";
import styles from "./styles";
//icons
import Icon from 'react-native-vector-icons/Fontisto';
import ADIcon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
//baseurl
import baseUrl from "../../../baseUrl";

export default class DriverHome extends React.Component{
    state = {
        posts:[],
    }

    AdminContact(){
        this.props.navigation.navigate('ContactAdmin')
    }

    Post(){
        this.props.navigation.navigate('PostLeftOvers')
    }

    async getPosts(){
        const value = await AsyncStorage.getItem('loggedIn');
        const parsedData = JSON.parse(value)
        await axios.get(baseUrl+`/apis/driver/get_assignend_posts?driver_id=${parsedData._id}`).then(response => {
            this.setState({posts:response.data.orders})
        })
    }

    componentDidMount(){
        this.props.navigation.addListener("focus", () => {
            this.getPosts();
        })

        this.getPosts();
    }

    PostDetails(post_id){
        this.props.navigation.navigate('DriverOrderDetails', {"post_id":post_id})
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
                    <View style={{position:'absolute', backgroundColor:"#6667ab", left:'10%', top:'10%', padding:5}}>
                    <Text style={{color:'white', fontSize:20}}>Pending</Text>
                    </View>
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