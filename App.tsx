import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import Application from './src/navigation/Application';

export default function App() {
  return (
<Provider store={store}>
<Application/>
</Provider>
  );
}
