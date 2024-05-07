import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import { HomeScreenProps } from '../../utils/types';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../store/auth';
import { CardField, createPaymentMethod, createToken, CardFieldProps } from '@stripe/stripe-react-native';
import { useQuery } from 'react-query';
import axios from 'axios';



export default function Home({ navigation }: HomeScreenProps) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [cardData, setCardDetails] = useState<CardFieldProps | null>(null);

  const fetchPosts = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return data;
};
console.log(fetchPosts,"---------------");
  const onCompleteDetails = async (cardDetails: CardFieldProps) => {
    console.log(cardDetails, "complete--------");
      try {
        const token = await createToken({ ...cardDetails,type: 'Card'});
        console.log(token, "TOken token")
        const data = await createPaymentMethod({
          paymentMethodType: 'Card',
          paymentMethodData: {
            billingDetails: { name: 'ankit', email: 'ankitviroja5460@gmail.com', phone: '9638738838' },
            token:token.token?.id,cvc:'232'
          }
        });
        console.log(data, "complete--------Data--------");
      } catch (error) {
        console.error('Error completing payment:', error);
      
    }
  };

  return (
    <View style={{ backgroundColor: 'red', flex: 1 }}>
      <Pressable onPress={() => {
        console.log("------- This is the Authentication Check ", isLoggedIn);
      }}>
        <CardField
          postalCodeEnabled={false}
          placeholder={{
            number: 'Card Number',
            expiration: 'MM/YY',
            cvc: 'CVC',
          }}
          cardStyle={{
            backgroundColor: '#FFFFFF',
            textColor: '#000000',
          }}
          style={{
            width: '100%',
            height: 50,
            marginVertical: 30,
          }}
          onCardChange={(cardDetails) => {
            // Handle card details change
            console.log(cardDetails.complete, 'cardDetails changed');
            if(cardDetails.complete){
              onCompleteDetails(cardDetails)

            }
          }}
          onFocus={(focusedField) => {
            // Handle field focus
            console.log(focusedField, "focusedField");
          }}
        />
        <Text style={{ color: 'black' }}>{isLoggedIn} Hello</Text>
      </Pressable>
    </View>
  );
}
