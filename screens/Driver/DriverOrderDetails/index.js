import React from "react";
import { SafeAreaView, Text, View, Image,TouchableOpacity } from "react-native";
import styles from "./styles";
//axios
import axios from 'axios'
//baseUrl
import baseUrl from "../../../baseUrl";
import Toast from 'react-native-toast-message';
import EIcon from 'react-native-vector-icons/Entypo';

export default class DriverOrderDetails extends React.Component{

    state = {
        post:{},
        isDelivered:false
    }
    componentDidMount(){
        const post_id = this.props.route.params.post_id
        this.getPostDetails(post_id);
    }

    getPostDetails(post_id){
        axios.get(baseUrl+`/apis/admin/posts_to_approve_details?post_id=${post_id}`).then(response => {
            this.setState({post:response.data.post[0]})
        })
    }

    completed(){
        let data = {
            "post_id":this.state.post._id
        }
        axios.post(baseUrl+'/apis/driver/order_delivered', data).then(response => {
            if(response.data.msg == "Order Marked As Completed"){
                Toast.show({
                    type: 'info',
                    text1: 'Order marked as completed',
                  });
            }
        })
        this.setState({isDelivered:true})
    }
    
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.PostImageBox}>
                <Image style={styles.PostImage} source={{uri:baseUrl+'/uploads/'+this.state.post.post_image}}/>
                </View>
                
                <View style={styles.PostInfoBox}>
                <View style={styles.approveButtonBox}>
                    {
                    this.state.isDelivered ? 
                    <View style={styles.approvedButton}>
                    <Text style={styles.approvedButtonText}>Completed</Text>
                    </View>:
                    <TouchableOpacity onPress={() => this.completed()} style={styles.approveButton}>
                    <Text style={styles.approveButtonText}>Pending</Text>
                    </TouchableOpacity>
                }
                <TouchableOpacity style={{marginLeft:10}} onPress={()=>this.props.navigation.navigate("StartOrder",{post_lat:this.state.post.latitude,post_lng:this.state.post.longitude})}>
                <EIcon name='location-pin' color="#6667ab" size={32} />
                    </TouchableOpacity>
                
                </View>
                    <View style={styles.ItemNameBox}>
                    <Text style={styles.ItemName}><Text style={{color:'black'}}>Name</Text>  {this.state.post.post_name}</Text>
                    </View>
                    <View style={styles.ItemLocationBox}>
                    <Text style={styles.ItemLocation}><Text style={{color:'black'}}>Location</Text>  {this.state.post.post_location}</Text>
                    </View>
                    <View style={styles.ItemLocationBox}>
                    <Text style={styles.ItemLocation}><Text style={{color:'black'}}>Date</Text>  {this.state.post.post_data}</Text>
                    </View>
                    <View>
                        <Text style={{color:'#6667ab', fontWeight:'bold', fontSize:20, marginTop:10}}>Post description</Text>
                        <Text style={styles.PostDescription}>{this.state.post.post_description}</Text>
                    </View>
                    <Toast
        position='top'
        bottomOffset={20}
      />
                </View>
            </SafeAreaView>
        )
    }
}