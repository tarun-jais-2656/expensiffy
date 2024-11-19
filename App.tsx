import React from 'react';
import StackNavigation from './src/navigation';
import { Provider } from 'react-redux';
import { MyStore } from './src/redux/myStore';


export default function App() {
  return (
    <Provider store={MyStore}>
      <StackNavigation />
    </Provider>
  );
}


