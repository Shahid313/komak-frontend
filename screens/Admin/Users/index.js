import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity,ScrollView, Image } from "react-native";
import styles from "./styles";
//icons
import Icon from 'react-native-vector-icons/Fontisto';
import ADIcon from 'react-native-vector-icons/AntDesign';
import axios from "axios";
//baseurl
import baseUrl from "../../../baseUrl";

export default class Users extends React.Component{

    state = {
        users:[]
    }

    componentDidMount(){
        axios.get(baseUrl+'/apis/admin/get_all_users').then(response => {
                this.setState({users:response.data.users})
        })
    }

    getUserDetails = (user) => {
        this.props.navigation.navigate('UserDetails', {'user':user})
    }
    
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>

                <View style={styles.allProducts}>
                    {this.state.users.length > 0 ?
                    this.state.users.map((user) => (
                        user.user_reg_cat !== 'driver' ?
                        <TouchableOpacity onPress={() => this.getUserDetails(user)} key={user._id} style={styles.ProductCard}>
                        {user.image ? 
                        <Image style={styles.productImage} source={{uri:baseUrl+'/user_images/'+user.image}}/>:
                        <Image style={styles.productImage} source={require('../../../assets/profile.jpg')}/>}
                        <View style={styles.usernameBox}>
                            <Text style={styles.username}>{user.name}</Text>
                        </View>
                        </TouchableOpacity>
                        :null
                        
                    )):
                    <Text>No user is added yet</Text>
                    }
                    
                
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}