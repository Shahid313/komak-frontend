import React from 'react';
import {View, Text} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ContactAdmin from "../screens/User/ContactAdmin";
import PostLeftOvers from "../screens/User/PostLeftOvers";
import Account from '../screens/User/Account';

const TopTab = createMaterialTopTabNavigator()

const AccountTopNavigator = () => {
    return(
        <TopTab.Navigator>
            <TopTab.Screen 
            options={ ({route}) => ({
                tabBarIndicatorStyle:{
                  color:'#6667ab',
                  backgroundColor:'#6667ab'
                },
                tabBarLabel:({focused}) => {
                    if (focused) {
                      return(
                        <View style={{width:120, paddingLeft:35}}>
                        <Text style={{color:'#6667ab', fontSize:15, fontWeight:'bold'}}>Posts</Text>
                        </View>
                      )
                    }else{
                        return(
                          <View style={{width:120, paddingLeft:35}}>
                          <Text style={{color:'#6667ab', fontSize:15, fontWeight:'bold'}}>Posts</Text>
                          </View>
                        )
                    }
                }}) }
             name="Posts" 
             component={Account} />

             {/* donate item */}
             <TopTab.Screen 
            options={ ({route}) => ({
                tabBarIndicatorStyle:{
                  color:'#6667ab',
                  backgroundColor:'#6667ab',
                },
                tabBarLabel:({focused}) => {
                    if (focused) {
                      return(
                        <View style={{width:120, paddingLeft:13}}>
                        <Text style={{color:'#6667ab', fontSize:15, fontWeight:'bold'}}>Donate item</Text>
                        </View>
                      )
                    }else{
                        return(
                          <View style={{width:120, paddingLeft:13}}>
                          <Text style={{color:'#6667ab', fontSize:15, fontWeight:'bold'}}>Donate item</Text>
                          </View>
                        )
                    }
                }}) }
             name="DonateItems" 
             component={PostLeftOvers} />

             {/* contact admin */}

             <TopTab.Screen 
            options={ ({route}) => ({
                tabBarIndicatorStyle:{
                  color:'#6667ab',
                  backgroundColor:'#6667ab'
                },
                tabBarLabel:({focused}) => {
                    if (focused) {
                      return(
                        <View style={{width:120, marginLeft:-20, paddingLeft:10 }}>
                        <Text style={{color:'#6667ab', fontSize:15, fontWeight:'bold'}}>Contact admin</Text>
                        </View>
                      )
                    }else{
                        return(
                          <View style={{width:120, paddingLeft:10, marginLeft:-20}}>
                          <Text style={{color:'#6667ab', fontSize:15, fontWeight:'bold'}}>Contact admin</Text>
                          </View>
                        )
                    }
                }}) }
             name="ContactAdmin" 
             component={ContactAdmin} />
            
        </TopTab.Navigator>
    )
  }

  export default AccountTopNavigator