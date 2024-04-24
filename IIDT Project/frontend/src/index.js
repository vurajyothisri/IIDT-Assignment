import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddtipsForcooking from './Components/Addtip';
import Home from './Components/home';
import  RecipeSearch from './Components/Searchrecipe'
const appRouter=createBrowserRouter([{
  path:"/",
         element:<App/>,
         children:[
          {
            path:"/",
            element:<Home />,
            },
            {
            path:"/Searchrecipe",
            element:< RecipeSearch/>,
            },
            {
              path:"/Addtip",
              element:< AddtipsForcooking/>
              }
         ]
        }])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
    
    <BrowserRouter>
    
    
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

