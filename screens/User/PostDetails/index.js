import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import styles from "./styles";
//axios
import axios from 'axios'
//baseUrl
import baseUrl from "../../../baseUrl";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class PostDetails extends React.Component{

    state = {
        post:{},
        user_reg_cat:'',
        drivers:[]
    }

    userInfo = async () => {
        const value = await AsyncStorage.getItem('loggedIn');
        const parsedData = JSON.parse(value)
        this.setState({user_reg_cat:parsedData.user_reg_cat})
    }
    componentDidMount(){
        const post_id = this.props.route.params.post_id
        this.getPostDetails(post_id);
        this.userInfo();
        axios.get(baseUrl+'/apis/admin/get_all_users').then(response => {
                 this.setState({drivers:response.data.users})
             
           
     })
        
        
    }

    getPostDetails(post_id){
        axios.get(baseUrl+`/apis/post/Post_details?post_id=${post_id}`).then(response => {
            this.setState({post:response.data.item[0]})
        })

        

        
    }
    
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.PostImageBox}>
                <Image style={styles.PostImage} source={{uri:baseUrl+'/uploads/'+this.state.post.post_image}}/>
                </View>
                <View style={styles.PostInfoBox}>
                    <View style={styles.ItemNameBox}>
                    <Text style={styles.ItemName}><Text style={{color:'#6667ab'}}>Name</Text>  {this.state.post.post_name}</Text>
                    </View>
                    <View>
                        <Text style={{color:'#6667ab', fontWeight:'bold', fontSize:20}}>Post description</Text>
                        <Text style={styles.PostDescription}>{this.state.post.post_description}</Text>
                    </View>
                
                    <View style={styles.ItemLocationBox}>
                    <Text style={styles.ItemLocation}><Text style={{color:'#6667ab'}}>Date</Text>  {this.state.post.post_data}</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}