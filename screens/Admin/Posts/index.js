import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity,ScrollView, Image } from "react-native";
import styles from "./styles";
import { useIsFocused } from '@react-navigation/native';
//icons
import Icon from 'react-native-vector-icons/Fontisto';
import ADIcon from 'react-native-vector-icons/AntDesign';
import axios from "axios";
//baseurl
import baseUrl from "../../../baseUrl";

 class Posts extends React.Component{
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
        axios.get(baseUrl+'/apis/post/get_all_approved_posts').then(response => {
            this.setState({posts:response.data.item})
        })
    }

    PostDetails(post_id){
        this.props.navigation.navigate('PostDetails', {"post_id":post_id})
    }
    render(){
        const { isFocused } = this.props;
        if(isFocused){
            axios.get(baseUrl+'/apis/post/get_all_approved_posts').then(response => {
                this.setState({posts:response.data.item})
            })
        }
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>

                <View style={styles.allProducts}>
                {this.state.posts.length > 0 ?
                this.state.posts.map((post, index) => (
                    <TouchableOpacity onPress={() => this.PostDetails(post._id)} key={post._id} style={styles.ProductCard}>
                    <Image style={styles.productImage} source={{uri:baseUrl+'/uploads/'+post.post_image}}/>
                    {post.isApproved == false ? 
                    <View style={{position:'absolute', backgroundColor:"#6667ab", left:'10%', top:'10%', padding:5}}>
                    <Text style={{color:'white', fontSize:20}}>Pending</Text>
                    </View>:
                    null}
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

export default function(props) {
    const isFocused = useIsFocused();
     // pass your class here
    return <Posts {...props} isFocused={isFocused} />;
  }