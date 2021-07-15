import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Pressable,
  Alert,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ENV from 'react-native-config';
import MercadoPagoCheckout from '@blackbox-vision/react-native-mercadopago-px';

import {getPreferenceId} from './service';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          headerMode="none"
          screenOptions={{animationEnabled: false}}
          mode="modal">
          <Stack.Screen key="1" name={'home'} component={Screen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const Screen = () => {
  const startCheckout = async () => {
    try {
      const preferenceId = await getPreferenceId();
      const payment = await MercadoPagoCheckout.createPayment({
        publicKey: ENV.MP_PUBLIC_KEY,
        preferenceId,
      });
      console.log(payment);
    } catch (err) {
      Alert.alert('Something went wrong', err.message);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#522334',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>HOLA!</Text>
      <Pressable style={{ backgroundColor: '#446664', borderRadius: 10, padding: 20 }}onPress={startCheckout}>
        <Text style={{ color: 'white', fontSize: 20 }}>Pagar MP</Text>
      </Pressable>
    </View>
  );
};
