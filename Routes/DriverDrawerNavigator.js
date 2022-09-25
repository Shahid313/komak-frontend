import React, { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
//screens
import DriverHome from '../screens/Driver/DriverHome';
import OrderHistory from '../screens/Driver/OrderHistory';
import Orders from '../screens/Driver/Orders';
//isFocused
import { useIsFocused } from '@react-navigation/native';

//styles
import styles from './styles';
//icons
import FAIcon from 'react-native-vector-icons/FontAwesome';
import EIcon from 'react-native-vector-icons/Entypo';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
//baseUrl
import baseUrl from '../baseUrl';


const Drawer = createDrawerNavigator();

function CustomDrawer (props) {

  const logout = () => {
    AsyncStorage.removeItem('loggedIn')
    props.navigation.navigate('SignIn')
  }

  return(
  <DrawerContentScrollView style={{backgroundColor:'#6667ab'}} {...props}>
    <View style={styles.DrawerHeader}>
      <Image style={{width:'100%', height:150}} source={require('../assets/komaklogo.png')}/>
    </View>
    <View>
    <DrawerItemList {...props}/>
    <View style={{marginTop:15}}>
      <TouchableOpacity onPress={() => logout()} style={{flexDirection:'row', alignItems:'center',paddingLeft:17}}>
            <MCIcon name='logout' color='#FFFFFF' size={23}/>
            <Text style={{color:'#FFFFFF', fontSize:18, marginLeft:30}}>Logout</Text>
      </TouchableOpacity>
                </View>
    </View>
    
  </DrawerContentScrollView>
  )
}

function DriverDrawerNavigator({navigation}){
  const [driverImage, setDriverImage] = useState('')

  const userData = async () => {
    const value = await AsyncStorage.getItem('loggedIn');
        const parsedData = JSON.parse(value)
        await axios.get(baseUrl+`/apis/user/getUserImage?user_id=${parsedData._id}`).then(response => {
            console.log("userImage ", response.data.userImage)
            setDriverImage(response.data.userImage)
        })
  }

  useEffect(() => {
    navigation.addListener("focus", () => {
      userData()
    })
    userData()
  },[])

  const uploadImage = () => {
    navigation.navigate('UploadProfileImage')
  }
    return (
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}/>}>
        <Drawer.Screen options={{
            headerTitleStyle:{
              display:'none'
            },
            headerStyle:{
              backgroundColor:'#6667ab'
            },
            headerTintColor:'#FFFFFF',
            headerRight:() => {
              return(
                <SafeAreaView style={styles.headerRight}>
                    
                    <TouchableOpacity onPress={() => uploadImage()} style={styles.adminProfile}>
                    {driverImage ? 
                        <Image style={{width:32, height:32, borderRadius:16}} source={{uri:baseUrl+'/user_images/'+driverImage}}/>:
                        <Image style={{width:32, height:32, borderRadius:16}} source={require('../assets/profile.jpg')}/>
                        }
                    </TouchableOpacity>
                </SafeAreaView>
              )
            },
            drawerLabel: function ({size, color, focused}){
              if(focused){
                return(
                  <View style={{flexDirection:'row', alignItems:'center'}}>
                    <EIcon name='home' color='#6667ab' size={21}/>
                    <Text style={{color:'#6667ab', fontSize:17, marginLeft:30}}>Home</Text>
                  </View>
                )
              }else{
                return(
                  <View style={{flexDirection:'row', alignItems:'center'}}>
                    <EIcon name='home' color='#FFFFFF' size={21}/>
                    <Text style={{color:'#FFFFFF', fontSize:17, marginLeft:30}}>Home</Text>
                  </View>
                )
              }
              
            },
            drawerActiveBackgroundColor:'#FFFFFF',
        }} name="Home" component={DriverHome} />

        <Drawer.Screen options={{
          headerTitle:"Orders",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:21, color:'#FFFFFF'},
          headerStyle:{
            backgroundColor:'#6667ab'
          },
          headerTintColor:'#FFFFFF',
          drawerLabel: function ({size, color, focused}){
            if(focused){
              return(
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <MCIcon name='post' color='#6667ab' size={21}/>
                  <Text style={{color:'#6667ab', fontSize:17, marginLeft:30}}>Orders</Text>
                </View>
              )
            }else{
              return(
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <MCIcon name='post' color='#FFFFFF' size={21}/>
                  <Text style={{color:'#FFFFFF', fontSize:17, marginLeft:30}}>Orders</Text>
                </View>
              )
            }
            
          },
          drawerActiveBackgroundColor:'#FFFFFF',
        }} name="Orders" component={Orders} />
        {/* History */}
        <Drawer.Screen options={{
          headerTitle:"History",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:21, color:'#FFFFFF'},
          headerStyle:{
            backgroundColor:'#6667ab'
          },
          headerTintColor:'#FFFFFF',
          drawerLabel: function ({size, color, focused}){
            if(focused){
              return(
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <MCIcon name='history' color='#6667ab' size={21}/>
                  <Text style={{color:'#6667ab', fontSize:17, marginLeft:30}}>Order History</Text>
                </View>
              )
            }else{
              return(
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <FAIcon name='history' color='#FFFFFF' size={21}/>
                  <Text style={{color:'#FFFFFF', fontSize:17, marginLeft:30}}>Order History</Text>
                </View>
              )
            }
            
          },
          drawerActiveBackgroundColor:'#FFFFFF',
        }} name="OrderHistory" component={OrderHistory} />
      </Drawer.Navigator>
    );
  }

  export default DriverDrawerNavigator;