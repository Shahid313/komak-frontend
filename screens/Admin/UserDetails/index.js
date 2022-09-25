import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import styles from "./styles";
//axios
import axios from 'axios'
//baseUrl
import baseUrl from "../../../baseUrl";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class UserDetails extends React.Component{
    state = {
        user:''
    }
    componentDidMount(){
        this.setState({user:this.props.route.params.user})
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                {console.log(this.state.user)}
                <View style={styles.PostImageBox}>
                    {this.state.user.image ? 
                <Image style={styles.PostImage} source={{uri:baseUrl+'/user_images/'+this.state.user.image}}/>:
                <Image style={styles.PostImage} source={require('../../../assets/profile.jpg')}/>}
                </View>
                <View style={styles.PostInfoBox}>
                    <View style={styles.ItemNameBox}>
                    <Text style={styles.ItemName}><Text style={{color:'#6667ab'}}>Name</Text>  {this.state.user.name}</Text>
                    </View>

                    <View style={styles.ItemNameBox}>
                    <Text style={styles.ItemName}><Text style={{color:'#6667ab'}}>Email</Text>  {this.state.user.email}</Text>
                    </View>

                    <View style={styles.ItemNameBox}>
                    <Text style={styles.ItemName}><Text style={{color:'#6667ab'}}>Status</Text>  {this.state.user.user_reg_cat}</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}