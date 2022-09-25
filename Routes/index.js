import React from "react";
import {Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../screens/Registration/SignUp/index'
import SignIn from '../screens/Registration/SignIn/index'
import Splash from "../screens/Registration/Splash";
import ContactAdmin from "../screens/User/ContactAdmin";
import PostLeftOvers from "../screens/User/PostLeftOvers";
import BottomTabNavigator from "./BottomTabNavigator";
import DrawerNavigator from "./DrawerNavigator";
import DriverDrawerNavigator from './DriverDrawerNavigator'
import PostDetails from "../screens/User/PostDetails";
import UpdateUserInfo from "../screens/User/UpdateUserInfo";
import UploadProfileImage from "../screens/User/UploadProfileImage";
import ChangePassword from "../screens/User/ChangePassword";
import PostsToApproveDetails from "../screens/Admin/PostsToApproveDetails";
import Messages from "../screens/Admin/Messages";
import DriversToAssignOrders from "../screens/Admin/DriversToAssignOrders";
import DriverOrderDetails from "../screens/Driver/DriverOrderDetails";
import Map from "../screens/Driver/DriverOrderDetails/map";
import Profile from "../screens/Registration/Profile";
import UserDetails from "../screens/Admin/UserDetails";
import AdminPostDetails from "../screens/Admin/AdminPostDetails";
import PendingPosts from "../screens/Admin/PendingPosts";
import Users from "../screens/Admin/Users";
import Drivers from "../screens/Admin/Drivers";
import Deliveries from "../screens/Admin/Deliveries";
import UpdateAdminName from "../screens/Admin/UpdateAdminName";
import OTP from "../screens/Registration/OTP";
import ForgotPassword from "../screens/Registration/ForgotPassword";
import ForgotPasswordOTP from "../screens/Registration/ForgotPasswordOTP";
import CreateNewPassword from "../screens/Registration/CreateNewPassword";
import Reply from "../screens/Admin/Reply";
import AboutUs from "../screens/User/AboutUs";
import ADIcon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

const Routes = ({navigation}) => {
  
    return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash} />
        <Stack.Screen options={{headerShown:false}} name="SignUp" component={SignUp} />
        <Stack.Screen options={{headerShown:false}} name="SignIn" component={SignIn} />
        <Stack.Screen options={{headerShown:false}} name="main" component={BottomTabNavigator} />
        <Stack.Screen options={{
          headerTitle:"Contact Admin",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:23, color:'#6667ab'},
          headerStyle:{
              backgroundColor:'#FFFFFF'
          },
          headerTintColor:'#6667ab'
        }} name="ContactAdmin" component={ContactAdmin} />

        <Stack.Screen options={{
          headerTitle:"Post LeftOvers",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:23, color:'#6667ab'},
          headerStyle:{
              backgroundColor:'#FFFFFF'
          },
          headerTintColor:'#6667ab'
        }} name="PostLeftOvers" component={PostLeftOvers} />
        <Stack.Screen options={{
          headerTitle:() => (
            <Image style={{width:32, height:32}} source={require('../assets/headerLog.png')}/>
          ),
          headerShown:false,
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:22, color:'#6667ab'},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerBackVisible:false,
          headerShadowVisible:false
        }} name="Admin" component={DrawerNavigator} />

        <Stack.Screen options={{
          headerTitle:() => (
            <Image style={{width:32, height:32}} source={require('../assets/headerLog.png')}/>
          ),
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:22, color:'#6667ab'},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerBackVisible:false,
          headerShadowVisible:false
        }} name="Driver" component={DriverDrawerNavigator} />

        <Stack.Screen options={{
          headerTitle:"KOMAK",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:22, color:'#6667ab'},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false,
          headerTintColor:'#6667ab'
        }} name="PostDetails" component={PostDetails} />

        <Stack.Screen options={{
          headerTitle:"UPDATE ACCOUNT",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:22, color:'#6667ab'},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false,
          headerTintColor:'#6667ab'
        }} name="UpdateUserInfo" component={UpdateUserInfo} />

        <Stack.Screen options={{
          headerTitle:"Upload profile image",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:20},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false,
        }} name="UploadProfileImage" component={UploadProfileImage}/>
        <Stack.Screen options={{
          headerTitle:"UPDATE PASSWORD",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:22, color:'#6667ab'},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false,
          headerTintColor:'#6667ab'
        }} name="ChangePassword" component={ChangePassword}/>
        <Stack.Screen options={{
          headerTitle:"POST DETAILS",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:22, color:'#6667ab'},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false,
          headerTintColor:'#6667ab'
        }} name="PostsToApproveDetails" component={PostsToApproveDetails}/>
        {/* //messages */}
        <Stack.Screen options={{
          headerTitle:"Mesasges",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:22, color:'#6667ab'},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false,
          headerTintColor:'#6667ab'
        }} name="Messages" component={Messages}/>
        {/* assign order */}
        <Stack.Screen options={{
          headerTitle:"Assign order to driver",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:22, color:'#6667ab'},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false,
          headerTintColor:'#6667ab'
        }} name="DriversToAssignOrders" component={DriversToAssignOrders}/>
        {/* driver order details */}
        <Stack.Screen options={{
          headerTitle:"Order Details",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:22, color:'#6667ab'},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false,
          headerTintColor:'#6667ab'
        }} name="DriverOrderDetails" component={DriverOrderDetails}/>

        <Stack.Screen options={{
          headerTitle:"Distination Location",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:22, color:'#6667ab'},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false,
          headerTintColor:'#6667ab'
        }} name="StartOrder" component={Map}/>
        {/* Profile screen */}
        <Stack.Screen options={{
          headerTitle:"Profile",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:20},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false,
        }} name="Profile" component={Profile}/>
        {/* userDetails */}
        <Stack.Screen options={{
          headerTitle:"Info",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:20},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false,
        }} name="UserDetails" component={UserDetails}/>
        {/* Post Details */}
        <Stack.Screen options={{
          headerTitle:"Post Details",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:20},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false,
        }} name="AdminPostDetails" component={AdminPostDetails}/>
        <Stack.Screen options={{
          headerTitle:() => (
            <Image style={{width:32, height:32}} source={require('../assets/headerLog.png')}/>
          ),
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:22, color:'#6667ab'},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false
        }} name="PendingPosts" component={PendingPosts} />
        <Stack.Screen options={{
          headerTitle:"Normal Users",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:20},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false,
        }} name="Users" component={Users}/>
        <Stack.Screen options={{
          headerTitle:"Drivers",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:20},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false,
        }} name="Drivers" component={Drivers}/>
        <Stack.Screen options={{
          headerTitle:"Deliveries",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:20},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false,
        }} name="Deliveries" component={Deliveries}/>
        {/* update admin name */}
        <Stack.Screen options={{
          headerTitle:"Update admin name",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:20},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false,
        }} name="UpdateAdminName" component={UpdateAdminName}/>
        {/* otp */}
        <Stack.Screen options={{
          headerTitle:"OTP",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:20},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false,
        }} name="OTP" component={OTP}/>
        {/* Reply */}
        <Stack.Screen options={{
          headerTitle:"Make a Reply",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:20},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false,
        }} name="Reply" component={Reply}/>

        {/* About Us */}
        <Stack.Screen options={{
          headerTitle:"About Us",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:20},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false,
        }} name="AboutUs" component={AboutUs}/>
        {/* Forgot Password */}
        <Stack.Screen options={{
          headerTitle:"Forgot Password",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:20},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false,
        }} name="ForgotPassword" component={ForgotPassword}/>

        {/* Forgot Password OTP */}
        <Stack.Screen options={{
          headerTitle:"Forgot Password OTP",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:20},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false,
        }} name="ForgotPasswordOTP" component={ForgotPasswordOTP}/>
        {/* Create New Password */}
        <Stack.Screen options={{
          headerTitle:"Create New Password",
          headerTitleAlign:'center',
          headerTitleStyle:{fontSize:20},
          headerStyle:{
              backgroundColor:'#FFFFFF',
          },
          headerShadowVisible:false,
        }} name="CreateNewPassword" component={CreateNewPassword}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
    
}

export default Routes;