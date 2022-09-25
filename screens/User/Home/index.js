import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity,ScrollView, Image } from "react-native";
import styles from "./styles";
//icons
import Icon from 'react-native-vector-icons/Fontisto';
import ADIcon from 'react-native-vector-icons/AntDesign';
import axios from "axios";
//baseurl
import baseUrl from "../../../baseUrl";

export default class Home extends React.Component{
    state = {
        posts:[]
    }
    AdminContact(){
        this.props.navigation.navigate('ContactAdmin')
    }

    Post(){
        this.props.navigation.navigate('PostLeftOvers')
    }

    componentDidMount(){
            this.props.navigation.addListener("focus", () => {
                axios.get(baseUrl+'/apis/post/get_all_approved_posts').then(response => {
                    this.setState({posts:response.data.item})
                    console.log(response.data.item)
                })
            })
            axios.get(baseUrl+'/apis/post/get_all_approved_posts').then(response => {
                this.setState({posts:response.data.item})
            })
    }

    PostDetails(post_id){
        this.props.navigation.navigate('PostDetails', {"post_id":post_id})
    }

    AboutUs(){
        this.props.navigation.navigate("AboutUs")
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                <View style={styles.allProducts}>

                <View style={styles.GifCard}>
                    <Image style={styles.GifImage} source={require('../../../assets/charity.gif')}/>
                    <View style={{position:'absolute', left:'5%', top:'5%', width:250, alignItems:'center',}}>
                    <Text style={{ fontSize:18, fontWeight:'bold', color:'white', textAlign:'center'}}>NO ONE HAS EVER BECOME POOR BY GIVING</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.AboutUs()} style={{position:'absolute', backgroundColor:'#6667ab', width:90, height:35, borderRadius:20, justifyContent:'center', alignItems:'center', top:'70%', left:'70%'}}>
                        <Text style={{color:'white', fontSize:16}}>About us</Text>
                    </TouchableOpacity>
                </View>
                
                {this.state.posts.length > 0 ?
                this.state.posts.map((post, index) => (
                    <View key={post._id}>
                    <TouchableOpacity onPress={() => this.PostDetails(post._id)} key={post._id} style={styles.ProductCard}>
                    <Image style={styles.productImage} source={{uri:baseUrl+'/uploads/'+post.post_image}}/>
                    <View style={styles.itemNameBox}>
                        <Text style={styles.itemName}>{post.post_name}</Text>
                        <Text>{post.post_description.slice(0,30)}...</Text>
                        
                        <Text style={{alignSelf:'flex-end'}}>{post.post_data.slice(0,10)}</Text>
                        
                    </View>
                    </TouchableOpacity>
                    {index == 1 ? 
                        <View  style={styles.GifCard}>
                        <Image style={styles.GifImage} source={require('../../../assets/charity3.gif')}/>
                    </View>:null
                    }
                    </View>


                ))
                :
                <Image style={{flex:1, alignSelf:'center'}} source={require('../../../assets/empty.jpg')}/>
            }
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}