import React from 'react'
import {View,Text,TouchableOpacity, Alert} from 'react-native'
import MapView,{MapPolyline, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Geolocation from '@react-native-community/geolocation';


export default class Map extends React.Component{
    state = {
        latitude:"",
        longitude:"",
      
        is_loading:true
    }
    GetCurrentLocation = ()=>{
        Geolocation.getCurrentPosition((res)=>{
            console.log(res.coords.altitude)
            this.setState({latitude:res.coords.latitude,longitude:res.coords.longitude})
        },(err)=>{
            console.log(err)
            Alert.alert("Please Turn on the gps and also allow location to this app")
        }
        )
        
        
    }

    componentDidMount(){

        this.GetCurrentLocation()
      
        
        console.log(this.props.route.params)

       setTimeout(()=>{
        this.GetCurrentLocation()
       console.log(this.state.latitude)

       },1000)

       Geolocation.watchPosition((pos)=>{
        this.setState({latitude:pos.coords.latitude,longitude:pos.coords.longitude})
       },(err)=>{
        console.log(err.message)

       })   



    }
    render(){
        return(
            <View style={{flex:1,}}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={{width:'100%',height:'100%'}}
                    region={{
                        latitude:this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 1,
                        longitudeDelta: 1,
                    }}
                    >

                {/* My Marker */}
                    <Marker
                    
                    coordinate={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                    }}
                    
                    />



                {/* Other User Marker */}
                <Marker
                    pinColor='green'
                    coordinate={{ latitude: parseFloat(this.props.route.params.post_lat), longitude:parseFloat(this.props.route.params.post_lng)}}
                    
                />


    <MapPolyline 
    strokeColor='red'

      strokeWidth={5}

    coordinates={ [
        { latitude: this.state.latitude, longitude: this.state.longitude },
        { latitude: parseFloat(this.props.route.params.post_lat), longitude:parseFloat(this.props.route.params.post_lng) }
        


        
    ]}
    
    
    />
     </MapView>

            </View>
        )
    }
}