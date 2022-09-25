import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity,ScrollView, Image, ActivityIndicator } from "react-native";
import styles from "./styles";
//icons
import Icon from 'react-native-vector-icons/Fontisto';
import ADIcon from 'react-native-vector-icons/AntDesign';
import axios from "axios";
//baseurl
import baseUrl from "../../../baseUrl";
import Toast from 'react-native-toast-message';

export default class DriversToAssignOrders extends React.Component{

    state = {
        users:[],
        post_id:'',
        isloading:false
    }
    
    componentDidMount(){
        const post_id = this.props.route.params.post_id
        this.setState({post_id:post_id})
        axios.get(baseUrl+'/apis/admin/get_all_users').then(response => {
                this.setState({users:response.data.users})
        })
    }

    assignpostToDriver(driver_id){
        this.setState({isloading:true})
        let data = {
            "driver_id":driver_id,
            "post_id":this.state.post_id
        }

        axios.post(baseUrl+'/apis/driver/assign_post_to_driver', data).then(response => {
            if(response.data.msg == "Post assigned to driver succesfully"){
                Toast.show({
                    type: 'info',
                    text1: "Post assigned to driver succesfully",
                  });
                this.setState({isloading:false})
            }else{
                alert("Something went wrong")
                this.setState({isloading:false})
            }
        })
    }
    
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>

                <View style={styles.allProducts}>
                    {this.state.users.map((user) => (
                        user.user_reg_cat === 'driver' ?
                        <TouchableOpacity onPress={() => this.assignpostToDriver(user._id)} key={user._id} style={styles.ProductCard}>
                        {user.image ? 
                        <Image style={styles.productImage} source={{uri:baseUrl+'/user_images/'+user.image}}/>:
                        <Image style={styles.productImage} source={require('../../../assets/profile.jpg')}/>}
                        <View style={styles.usernameBox}>
                        {
                    this.state.isloading ? <ActivityIndicator color="#FFFFFF" animating={this.state.isloading}/>:
                            <Text style={styles.username}>{user.name}</Text>
                        }
                        </View>
                        </TouchableOpacity>
                        :null
                        
                    ))}
                    
                    <Toast
        position='top'
        bottomOffset={20}
      />
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}