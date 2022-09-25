import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity,ScrollView, Image } from "react-native";
import styles from "./styles";
//icons
import Icon from 'react-native-vector-icons/Fontisto';
import ADIcon from 'react-native-vector-icons/AntDesign';
import axios from "axios";
//baseurl
import baseUrl from "../../../baseUrl";

export default class OrderHistory extends React.Component{
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
            axios.get(baseUrl+'/apis/driver/get_all_delivered_orders').then(response => {
                console.log(response.data.orders)
                this.setState({posts:response.data.orders})
            })
        })
        axios.get(baseUrl+'/apis/driver/get_all_delivered_orders').then(response => {
            console.log(response.data.orders)
            this.setState({posts:response.data.orders})
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
                {this.state.posts.length > 0 ?
                this.state.posts.map((post, index) => (
                    <TouchableOpacity onPress={() => this.PostDetails(post._id)} key={post._id} style={styles.ProductCard}>
                    <Image style={styles.productImage} source={{uri:baseUrl+'/uploads/'+post.post_image}}/>
                    <View style={styles.itemNameBox}>
                        <Text style={styles.itemName}>{post.post_name}</Text>
                        <Text>{post.post_description.slice(0,30)}...</Text>
                        
                        <Text style={{alignSelf:'flex-end'}}>{post.post_data.slice(0,10)}</Text>
                        
                    </View>
                    </TouchableOpacity>
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