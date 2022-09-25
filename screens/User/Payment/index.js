import {
  CardField,
  StripeProvider,
  useStripe,
} from '@stripe/stripe-react-native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Alert, Button, SafeAreaView, TextInput, View,Text, TouchableOpacity} from 'react-native';
import baseUrl from "../../../baseUrl";
import styles from './styles';
import Toast from 'react-native-toast-message';
import SimpleToast from 'react-native-simple-toast';

const Payment  = () => {
  return (
    <StripeProvider
      publishableKey="pk_test_51JvHo6IFWqjmRPIakvbcALWtFJq8UI6hCc9MXRuVOFZKEsd7kqpILBloDHdQ8DmvqZOsgpfZ38vGEvehsoCKxzXs00aARWR0ZI"
      merchantIdentifier="merchant.identifier">
      <SafeAreaView>
        <StripeTest />
      </SafeAreaView>
    </StripeProvider>
  );
};

const StripeTest = () => {
  const [isLoading, setIsloading] = useState(false)
  const {confirmPayment} = useStripe();
  const [key, setKey] = useState('')
  const [amount, setAmount] = useState('')

  const handleConfirmation = async () => {
    if(amount == ''){
      SimpleToast.show('Please enter the amount', Toast.LONG);
    }else{
      let data = {
        "amount":amount
      }
      setIsloading(true)
      await axios.post(baseUrl+`/apis/user/create-payment-intent`, data)
        .then(res => {
          setKey(res.data.clientSecret)
        })
        .catch(e => {
          setIsloading(false)
          Toast.show({
            type: 'info',
            text1: e.message,
          });
        });
  
      if (key) {
        const {paymentIntent, error} = await confirmPayment(key, {
          paymentMethodType: 'Card',
          billingDetails: {
            email: 'shahidkahn11@gmail..com',
          },
        });
  
        if (!error) {
          setIsloading(false)
          Toast.show({
            type: 'info',
            text1: `Received payment, Billed for ${paymentIntent?.amount}`,
          });
        } else {
          setIsloading(false)
          Toast.show({
            type: 'info',
            text1: `Error ${error.message}`,
          });
        }
      }
    }
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{width:'100%', height:150, marginTop:30}}>
        <Image style={{width:'100%', height:'100%'}} source={require('../../../assets/card3.png')}/>
      </View>
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
          borderColor:'#6667ab',
          borderWidth:1,
          borderRadius:15
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={cardDetails => {
          console.log('cardDetails', cardDetails);
        }}
        onFocus={focusedField => {
          console.log('focusField', focusedField);
        }}
      />
      <TextInput onChangeText={(e) => setAmount(e)} style={styles.EmailInput} placeholderTextColor="#929292" placeholder="Amount"/>
      <TouchableOpacity onPress={handleConfirmation} style={styles.LoginButton}>
        {
        isLoading ? <ActivityIndicator color="#FFFFFF" animating={isLoading}/>:
        <Text style={styles.LoginButtonText}>Donate</Text>
        }
      </TouchableOpacity>
      <Toast
        position='top'
        bottomOffset={20}
      />
    </SafeAreaView>
  );
};

export default Payment;