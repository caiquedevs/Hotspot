import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/styled';
import Home from './pages/Home';
import store, { persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <Home />
        <ToastContainer autoClose={5000} className="toast-container" />
      </PersistGate>
    </Provider>
  );
}

export default App;
