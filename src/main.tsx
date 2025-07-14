import { createRoot } from 'react-dom/client';
import './styles/index.css';
import './styles/tailwind.css';
import App from './App.tsx';
import Provider from './provider.tsx';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store.ts';

createRoot(document.getElementById('root')!).render(
  <Provider>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </Provider>
);
