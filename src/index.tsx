import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store'

import './index.css';
import 'remixicon/fonts/remixicon.css'
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ToastContainer
        theme="dark"
        position="top-center"
        autoClose={2000}
        closeOnClick
        pauseOnHover={false}
      />
      <App />
    </Provider>
  </BrowserRouter>
);