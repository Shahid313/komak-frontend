import React from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
//screens
import AdminDashboard from '../screens/Admin/AdminDashboard';
import Posts from '../screens/Admin/Posts'
import Users from '../screens/Admin/Users';
import History from '../screens/Admin/History';
import Deliveries from '../screens/Admin/Deliveries';
import AddDriver from '../screens/Admin/AddDriver';
import Drivers from '../screens/Admin/Drivers';
//styles
import styles from './styles';
//icons
import FAIcon from 'react-native-vector-icons/FontAwesome';
import EIcon from 'react-native-vector-icons/Entypo';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    <View style={{paddingBottom:15}}>
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

function DrawerNavigator({navigation}){
    const seeMessages = () => {
      navigation.navigate('Messages')
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
            headerShadowVisible:false,
            headerRight:() => {
              return(
                <SafeAreaView style={styles.headerRight}>
                    <TouchableOpacity onPress={() => seeMessages()} style={styles.notificationButton}>
                    <FAIcon name='envelope' color="#FFFFFF" size={26} />
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
        }} name="AdminHome" component={AdminDashboard} />
        <Drawer.Screen options={{
          headerTitleStyle:{
            display:'none'
          },
          headerStyle:{
            backgroundColor:'#6667ab'
          },
          headerTintColor:'#FFFFFF',
          drawerLabel: function ({size, color, focused}){
            if(focused){
              return(
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <MCIcon name='post' color='#6667ab' size={21}/>
                  <Text style={{color:'#6667ab', fontSize:17, marginLeft:30}}>Posts</Text>
                </View>
              )
            }else{
              return(
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <MCIcon name='post' color='#FFFFFF' size={21}/>
                  <Text style={{color:'#FFFFFF', fontSize:17, marginLeft:30}}>Posts</Text>
                </View>
              )
            }
          },
          drawerActiveBackgroundColor:'#FFFFFF',
        }} name="Posts" component={Posts} />
        <Drawer.Screen options={{
          headerTitle:"Users",
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
                  <EIcon name='users' color='#6667ab' size={21}/>
                  <Text style={{color:'#6667ab', fontSize:17, marginLeft:30}}>Users</Text>
                </View>
              )
            }else{
              return(
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <EIcon name='users' color='#FFFFFF' size={21}/>
                  <Text style={{color:'#FFFFFF', fontSize:17, marginLeft:30}}>Users</Text>
                </View>
              )
            }
            
          },
          drawerActiveBackgroundColor:'#FFFFFF',
        }} name="Users" component={Users} />
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
                  <Text style={{color:'#6667ab', fontSize:17, marginLeft:30}}>History</Text>
                </View>
              )
            }else{
              return(
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <FAIcon name='history' color='#FFFFFF' size={21}/>
                  <Text style={{color:'#FFFFFF', fontSize:17, marginLeft:30}}>History</Text>
                </View>
              )
            }
            
          },
          drawerActiveBackgroundColor:'#FFFFFF',
        }} name="History" component={History} />

        {/* Diliveries */}
        <Drawer.Screen options={{
          headerTitle:"Deliveries",
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
                  <MCIcon name='truck-delivery' color='#6667ab' size={21}/>
                  <Text style={{color:'#6667ab', fontSize:17, marginLeft:30}}>Diliveries</Text>
                </View>
              )
            }else{
              return(
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <MCIcon name='truck-delivery' color='#FFFFFF' size={21}/>
                  <Text style={{color:'#FFFFFF', fontSize:17, marginLeft:30}}>Diliveries</Text>
                </View>
              )
            }
            
          },
          drawerActiveBackgroundColor:'#FFFFFF',
        }} name="Deliveries" component={Deliveries} />

        {/* Settings */}
        <Drawer.Screen options={{
          headerTitle:"ADD DRIVER",
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
                  <FAIcon name='drivers-license' color='#6667ab' size={19}/>
                  <Text style={{color:'#6667ab', fontSize:17, marginLeft:30}}>Add Driver</Text>
                </View>
              )
            }else{
              return(
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <FAIcon name='drivers-license' color='#FFFFFF' size={19}/>
                  <Text style={{color:'#FFFFFF', fontSize:17, marginLeft:30}}>Add Driver</Text>
                </View>
              )
            }
            
          },
          drawerActiveBackgroundColor:'#FFFFFF',
        }} name="AddDriver" component={AddDriver} />
        {/* Driver */}
        <Drawer.Screen options={{
          headerTitle:"DRIVERS",
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
                  <EIcon name='users' color='#6667ab' size={21}/>
                  <Text style={{color:'#6667ab', fontSize:17, marginLeft:30}}>Drivers</Text>
                </View>
              )
            }else{
              return(
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <EIcon name='users' color='#FFFFFF' size={21}/>
                  <Text style={{color:'#FFFFFF', fontSize:17, marginLeft:30}}>Drivers</Text>
                </View>
              )
            }
            
          },
          drawerActiveBackgroundColor:'#FFFFFF',
        }} name="Drivers" component={Drivers} />
      </Drawer.Navigator>
    );
  }

  export default DrawerNavigator;