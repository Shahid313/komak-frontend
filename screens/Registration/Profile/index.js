import React,{useState, useEffect} from "react";
import { SafeAreaView, Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import baseUrl from "../../../baseUrl";

const Profile = ({navigation}) => {
    const [profileImage, setProfileImage] = useState('')
    const [username, setUserName] = useState('')

    useEffect(() => {
      getUserImage();
      navigation.addListener("focus", () => {
        getUserImage();
      })
    })

    const getUserImage = async () => {
        const value = await AsyncStorage.getItem('loggedIn');
        const parsedData = JSON.parse(value)
        setUserName(parsedData.name)
        await axios.get(baseUrl+`/apis/user/getUserImage?user_id=${parsedData._id}`).then(response => {
            console.log("userImage ", response.data.userImage)
            setProfileImage(response.data.userImage)
        })
    }

    const UpdateAccount = () => {
        navigation.navigate('UpdateUserInfo')
    }

    const uploadImage = () => {
        navigation.navigate('UploadProfileImage')
    }

    const logout = () => {
        AsyncStorage.removeItem('loggedIn')
        navigation.navigate('SignIn')
    }
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.ProfileImageAndName}>
                <TouchableOpacity onPress={() => uploadImage()} style={styles.ProfileImage}>
                {profileImage ? 
                        <Image style={{width:80, height:80, borderRadius:40}} source={{uri:baseUrl+'/user_images/'+profileImage}}/>:
                        <Image style={{width:80, height:80, borderRadius:40}} source={require('../../../assets/profile.jpg')}/>
                        }
                </TouchableOpacity>
                <View style={styles.NameAndChangePassword}>
                <Text style={styles.Name}>{username}</Text>
                <TouchableOpacity onPress={() => UpdateAccount()}>
                    <Text>Change password</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => logout()} style={styles.logoutButton}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
                </View>
                </View>


                
            </SafeAreaView>
        )

}

export default Profile