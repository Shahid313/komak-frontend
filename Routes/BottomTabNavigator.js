import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View, Text, Image } from "react-native";
//icons
import EIcon from 'react-native-vector-icons/Entypo';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MAIcon from 'react-native-vector-icons/MaterialIcons';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
//screens
import Home from "../screens/User/Home";
import Account from "../screens/User/Account";
import Payment from "../screens/User/Payment";
//Drawer Navigator
//styles
import styles from "./styles";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import baseUrl from "../baseUrl";
//Account top navigator
import AccountTopNavigator from "./AccountTopNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({navigation}) => {
    const [profileImage, setProfileImage] = useState('')
    useEffect(() => {
      getUserImage();
      navigation.addListener("focus", () => {
        getUserImage();
      })
    })

    const getUserImage = async () => {
        const value = await AsyncStorage.getItem('loggedIn');
        const parsedData = JSON.parse(value)
        await axios.get(baseUrl+`/apis/user/getUserImage?user_id=${parsedData._id}`).then(response => {
            console.log("userImage ", response.data.userImage)
            setProfileImage(response.data.userImage)
        })
    }

    const Profile = () => {
      navigation.navigate("Profile")
    }
    return(
      <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard:true,
        tabBarStyle: {
          alignSelf:'center',
          height: 70,
          width:'100%',
          backgroundColor:'#6667ab',
          shadowColor: "#000",
        shadowOffset: {
	        width: 2,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        },
      }}
      >
        <Tab.Screen 
         name="Home" component={Home} 
         options={{
            tabBarIcon: ({size, color, focused}) => 
            focused ? 
            <View style={{alignItems:'center', justifyContent:'center'}}>
            <EIcon name='home' color="#FFFFFF" size={25} />
            <Text style={{color:'#FFFFFF'}}>home</Text>
            </View>
            :
            <View style={{alignItems:'center', justifyContent:'center'}}>
            <EIcon name='home' color='#D2D2D3' size={25} />
            <Text style={{color:'#D2D2D3'}}>home</Text>
            </View>,
            headerLeft:() => (
              <View style={{marginLeft:15}}>
                <Image style={{width:40, height:32}} source={require('../assets/headerLog.png')}/>
              </View>
            ),
            headerRight:() => (
              <TouchableOpacity onPress={() => Profile()} style={styles.avatar}>
                {profileImage ? 
                        <Image style={{width:30, height:30, borderRadius:15}} source={{uri:baseUrl+'/user_images/'+profileImage}}/>:
                        <Image style={{width:30, height:30, borderRadius:15}} source={require('../assets/profile.jpg')}/>
                        }
              </TouchableOpacity>
            ),
            headerTitleStyle:{
              display:'none'
            },
            tabBarShowLabel: false,
            headerStyle:{
                backgroundColor:'#FFFFFF'
            },
            
            
            
        }}
         />

        <Tab.Screen 
        options={{
            tabBarIcon: ({size, color, focused}) => 
            focused ? 
            <View style={{justifyContent:'center', alignItems:'center'}}>
            <MCIcon name='charity' color="#FFFFFF" size={32} />
            <Text style={{color:'#FFFFFF'}}>donate</Text>
            </View>
            :
            <View style={{justifyContent:'center', alignItems:'center'}}>
            <MCIcon name='charity' color='#D2D2D3' size={32} />
            <Text style={{color:'#D2D2D3'}}>donate</Text>
            </View>
            ,
            headerLeft:() => (
              <View style={{marginLeft:15}}>
                <Image style={{width:40, height:32}} source={require('../assets/headerLog.png')}/>
              </View>
            ),
            headerRight:() => (
              <TouchableOpacity onPress={() => Profile()} style={styles.avatar}>
                {profileImage ? 
                        <Image style={{width:30, height:30, borderRadius:15}} source={{uri:baseUrl+'/user_images/'+profileImage}}/>:
                        <Image style={{width:30, height:30, borderRadius:15}} source={require('../assets/profile.jpg')}/>
                        }
              </TouchableOpacity>
            ),
            headerTitleStyle:{
              display:'none'
            },
            tabBarShowLabel: false,
            
            headerStyle:{
                backgroundColor:'#FFFFFF'
            },
        }}
         name="Payment" component={Payment} />

        <Tab.Screen 
        options={{
            tabBarIcon: ({size, color, focused}) => 
            focused ? 
            <View style={{alignItems:'center', justifyContent:'center'}}>
            <MCIcon name='account' color="#FFFFFF" size={32} />
            <Text style={{color:'#FFFFFF'}}>account</Text>
            </View>
            :
            <View style={{alignItems:'center', justifyContent:'center'}}>
            <MCIcon name='account' color='#D2D2D3' size={32} />
            <Text style={{color:'#D2D2D3'}}>account</Text>
            </View>,
            tabBarShowLabel: false,
            headerTitleStyle:{
              display:'none'
            },
            headerShadowVisible:false,
            headerStyle:{
                backgroundColor:'#FFFFFF'
            },
            headerLeft:() => (
              <View style={{marginLeft:15}}>
                <Image style={{width:40, height:32}} source={require('../assets/headerLog.png')}/>
              </View>
            ),
            headerRight:() => (
              <TouchableOpacity onPress={() => Profile()} style={styles.avatar}>
                {profileImage ? 
                        <Image style={{width:30, height:30, borderRadius:15}} source={{uri:baseUrl+'/user_images/'+profileImage}}/>:
                        <Image style={{width:30, height:30, borderRadius:15}} source={require('../assets/profile.jpg')}/>
                        }
              </TouchableOpacity>
            )
        }}
         name="Account" component={AccountTopNavigator} />
      </Tab.Navigator>
    )
}

export default BottomTabNavigator;