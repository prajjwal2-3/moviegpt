import React from 'react';
import ReactDOM from 'react-dom/client';

import Browser from './components/Browse';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import Login1 from './components/Login1';
import Header from './components/Header';
import './App.css';
import { Provider } from 'react-redux';
import { store} from './utils/Appstore'

function App() {
  
  return (
    <div >
        <Header/>
        <Outlet/>
    </div>
  );
  
}
const router = createBrowserRouter([
  {
   path: "/",
   element: <Login1/>,
   children: [
    {
      path: "/browse",
      element:<Browser/>
    },
    {
      path: "/login",
      element:<Login1/>
    }
   ]
  },
  
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
    </Provider>
  
);


reportWebVitals();
