import React from "react";
import { SafeAreaView, Text, View, Image,TouchableOpacity } from "react-native";
import styles from "./styles";
//axios
import axios from 'axios'
//baseUrl
import baseUrl from "../../../baseUrl";

export default class PostsToApproveDetails extends React.Component{

    state = {
        post:{}
    }
    componentDidMount(){
        const post_id = this.props.route.params.post_id
        this.getPostDetails(post_id);
        this.props.navigation.addListener("focus", () => {
            this.getPostDetails(post_id);
        })
    }

    getPostDetails(post_id){
        axios.get(baseUrl+`/apis/admin/posts_to_approve_details?post_id=${post_id}`).then(response => {
            this.setState({post:response.data.post[0]})
        })
    }

    Approve(post_id){
        axios.post(baseUrl+`/apis/admin/approve_post?post_id=${post_id}`).then(response => {
            if(response.data.msg == "Post approved"){
                this.props.navigation.navigate('DriversToAssignOrders', {"post_id":post_id})
            }
        })
    }
    
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.PostImageBox}>
                <Image style={styles.PostImage} source={{uri:baseUrl+'/uploads/'+this.state.post.post_image}}/>
                </View>
                
                <View style={styles.PostInfoBox}>
                <View style={styles.approveButtonBox}>
                    {this.state.post.isApproved ? 
                    <View style={styles.approvedButton}>
                        <Text style={styles.approvedButtonText}>Approved</Text>
                    </View>:
                    <TouchableOpacity onPress={() => this.Approve(this.state.post._id)} style={styles.approveButton}>
                    <Text style={styles.approveButtonText}>Approve</Text>
                </TouchableOpacity>
                    }
                
                
                </View>
                    <View style={styles.ItemNameBox}>
                    <Text style={styles.ItemName}><Text style={{color:'#6667ab'}}>Name</Text>  {this.state.post.post_name}</Text>
                    </View>
                    <View style={styles.ItemLocationBox}>
                    <Text style={styles.ItemLocation}><Text style={{color:'#6667ab'}}>Location</Text>  {this.state.post.post_location}</Text>
                    </View>
                    <View style={styles.ItemLocationBox}>
                    <Text style={styles.ItemLocation}><Text style={{color:'#6667ab'}}>Date</Text>  {this.state.post.post_data}</Text>
                    </View>
                    <View>
                        <Text style={{color:'#6667ab', fontWeight:'bold', fontSize:20}}>Post description</Text>
                        <Text style={styles.PostDescription}>{this.state.post.post_description}</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}