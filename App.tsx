import * as React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import Application from './src/navigation/Application';
import {QueryClient, QueryClientProvider} from 'react-query';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Application />
      </QueryClientProvider>
    </Provider>
  );
}
