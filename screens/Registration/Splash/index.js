import React from "react";
import {Text, Image,  SafeAreaView, View} from 'react-native'
import styles from './styles'

class Splash extends React.Component{
    

    render(){
        setTimeout(() => {
            this.props.navigation.navigate('SignUp')
        }, 3000);
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.logo}>
                <Image style={{width:192, height:192,}} source={require('../../../assets/logo2.png')}/>
                <Text style={styles.welcome}>Welcome</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default Splash;