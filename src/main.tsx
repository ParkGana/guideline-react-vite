import { createRoot } from 'react-dom/client';
import './styles/index.css';
import './styles/tailwind.css';
import App from './App.tsx';
import Provider from './provider.tsx';

createRoot(document.getElementById('root')!).render(
  <Provider>
    <App />
  </Provider>
);
