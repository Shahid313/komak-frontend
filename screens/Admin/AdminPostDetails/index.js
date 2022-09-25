import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import styles from "./styles";
//axios
import axios from 'axios'
//baseUrl
import baseUrl from "../../../baseUrl";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AdminPostDetails extends React.Component{

    state = {
        post:{},
        driver:{}
    }

    componentDidMount(){
        const post = this.props.route.params.post
        this.setState({post:post})
        this.getPostDetails(post.driver_id);
        
        
    }

    async getPostDetails(driver_id){
        await axios.get(baseUrl+`/apis/post/get_post_driver_details?driver_id=${driver_id}`).then(response => {
            console.log(response.data.driver)
            this.setState({driver:response.data.driver[0]})
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
                    <View style={styles.ItemNameBox}>
                    <Text style={styles.ItemName}><Text style={{color:'#6667ab'}}>Driver name</Text>  {this.state.driver.name}</Text>
                    </View>
                    <View style={styles.ItemNameBox}>
                    <Text style={styles.ItemName}><Text style={{color:'#6667ab'}}>Driver email</Text>  {this.state.driver.email}</Text>
                    </View>
                    <View style={styles.ItemNameBox}>
                    <Text style={styles.ItemName}><Text style={{color:'#6667ab'}}>Item location</Text>  {this.state.post.post_location}</Text>
                    </View>
                    <View>
                        <Text style={{color:'#6667ab', fontWeight:'bold', fontSize:20}}>{this.state.post.post_description}</Text>
                        <Text style={styles.PostDescription}>Description</Text>
                    </View>
                
                    <View style={styles.ItemLocationBox}>
                    <Text style={styles.ItemLocation}><Text style={{color:'#6667ab'}}>Date</Text>  {this.state.post.post_data}</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}