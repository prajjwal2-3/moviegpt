import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import Browser from './components/Browse';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login1 from './components/Login1';
function App() {
  return (
    <div >
    
    <Body/>
    </div>
  );
}
const router = createBrowserRouter([
  {
   path: "/browse",
   element: <Browser/>
  },
  {
    path: "/login",
    element:<Login1/>
  },
{
  path: "/",
  element: <Body/>
 },

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
  
);


reportWebVitals();
