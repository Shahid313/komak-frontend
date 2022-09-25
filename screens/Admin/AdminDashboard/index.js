import React from 'react'
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'
import axios from 'axios'
import baseUrl from '../../../baseUrl'
import * as ImagePicker from "react-native-image-picker"
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AIcon from 'react-native-vector-icons/AntDesign';

export default class AdminDashboard extends React.Component{

    state = {
        pending_posts:[],
        deliveries:[],
        drivers:[],
        normal_users:[],
        ProfileImage:'',
        admin_name:''
    }
    componentDidMount(){
        this.getPostsToApprove()
        this.getDeliveries()
        this.getDrivers()
        this.getNormalUsers()
        this.props.navigation.addListener('focus', () => {
            this.getPostsToApprove()
            this.getDeliveries()
            this.getDrivers()
            this.getNormalUsers()
            this.getUserImage()
        })
    }

    getPostsToApprove(){
        axios.get(baseUrl+'/apis/admin/posts_to_approve').then(response => {
            this.setState({pending_posts:response.data.posts})
        })

        
    }

    getDeliveries(){
        axios.get(baseUrl+'/apis/admin/deliveries').then(response => {
            this.setState({deliveries:response.data.orders})
        })
    }

    getDrivers(){
        axios.get(baseUrl+'/apis/admin/get_all_drivers').then(response => {
            this.setState({drivers:response.data.drivers})
        })
    }

    getNormalUsers(){
        axios.get(baseUrl+'/apis/admin/get_normal_users').then(response => {
            this.setState({normal_users:response.data.users})
        })
    }

    PendingPosts(){
        this.props.navigation.navigate('PendingPosts')
    }

    NormalUsers(){
        this.props.navigation.navigate('Users')
    }

    Drivers(){
        this.props.navigation.navigate('Drivers')
    }

    Deliveries(){
        this.props.navigation.navigate('Deliveries')
    }

    uploadImage = () => {
        this.props.navigation.navigate('UploadProfileImage')
    }

    getUserImage = async () => {
        const value = await AsyncStorage.getItem('loggedIn');
        const parsedData = JSON.parse(value)
        await axios.get(baseUrl+`/apis/user/getUserData?user_id=${parsedData._id}`).then(response => {
            this.setState({admin_name:response.data.user.name})
            this.setState({ProfileImage:response.data.user.image})
        })
    }

    UpdateName = async () => {
        const value = await AsyncStorage.getItem('loggedIn');
        const parsedData = JSON.parse(value)
        this.props.navigation.navigate('UpdateAdminName', {'admin_id':parsedData._id})
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.ProfileDetails}>
                        <View style={styles.ImageAnName}>
                            <TouchableOpacity onPress={() => this.uploadImage()} style={styles.ProfileImage}>
                                {this.state.ProfileImage != 'null' ? 
                            <Image style={{width:60, height:60, borderRadius:30}} source={{uri:baseUrl+'/user_images/'+this.state.ProfileImage}}/>:
                            <Image style={{width:60, height:60, borderRadius:30}} source={require('../../../assets/profile.jpg')}/>}
                            </TouchableOpacity>
                            <View style={styles.WelcomeAndName}>
                                <Text style={styles.welcome}>Welcome</Text>
                                <View style={styles.NameAndEdit}>
                                <Text style={styles.ProfileName}>{this.state.admin_name}</Text>
                                <TouchableOpacity onPress={() => this.UpdateName()} style={{marginLeft:5}}>
                                <AIcon name='edit' color='white' size={23} />
                                </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={styles.AdminBoxes}>
                        <View style={styles.leftBox}>
                            <TouchableOpacity onPress={() => this.PendingPosts()} style={styles.Box1}>
                                <Text style={styles.BoxText}>Pending posts</Text>
                                <Text style={styles.BoxText}>({this.state.pending_posts.length})</Text>
                                </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.Drivers()} style={styles.Box2}>
                                <Text style={styles.BoxText}>Drivers</Text>
                                <Text style={styles.BoxText}>({this.state.drivers.length})</Text>
                                </TouchableOpacity>
                        </View>
                        <View style={styles.rightBox}>
                        <TouchableOpacity onPress={() => this.NormalUsers()} style={styles.Box3}>
                            <Text style={styles.BoxText}>Normal Users</Text>
                            <Text style={styles.BoxText}>({this.state.normal_users.length})</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.Deliveries()} style={styles.Box4}>
                                <Text style={styles.BoxText}>Deliveries</Text>
                                <Text style={styles.BoxText}>({this.state.deliveries.length})</Text>
                                </TouchableOpacity>
                        </View>

                    </View>


                    <View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}