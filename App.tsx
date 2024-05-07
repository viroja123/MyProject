import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import Application from './src/navigation/Application';
import { StripeProvider } from '@stripe/stripe-react-native';

export default function App() {
  return (
    <StripeProvider
      publishableKey={"pk_test_51Ns4RVSDJFdGRy2IZ0sP49BLZ2OWDZJ7yczyIpug0Ax5KkpcTJAbc0dk6CGluAhCzXkGaPY2cZon10w7wAXnHbYb00bKUohkZX"}
      merchantIdentifier="merchant.identifier" 
      urlScheme="com.an" 
    >
<Provider store={store}>
<Application/>
</Provider>
</StripeProvider>
  );
}
