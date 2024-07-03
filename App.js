
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Shimmer } from "./src/components/Shimmer";

import { Footer } from "./src/components/Footer";

import { Header } from "./src/components/Header";

import { Contacts } from "./src/components/Contact";

import { Body } from "./src/components/Body";

import { Error } from "./src/components/Error";

import { RestaurantMenu } from "./src/components/RestaurantMenu";

import  Profile from "./src/components/Profile";
import { Suspense, lazy } from "react";

import InstamartDummy from "./src/components/Dummy";


const About= lazy(()=>import("./src/components/About"))

const Instamart= lazy(()=> import("./src/components/Instamart"))

const AppLayout = () => {
  return (
    //React.Fragment
    <> 
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}
const appRouter =createBrowserRouter([
  {
    path:"/",
    element :<AppLayout/>,
    errorElement :<Error/>,
    children:[
      {
        path:"/",
        element:<Body user={
          {
            name:"namaste react",
            email:""
          }
      }/>

      },
      {
        path:"/about",
        element:(
        <Suspense fallback={<h1>loading.............................</h1>}>
          <About/>
        </Suspense>
        ),
        children: [
          {
            path:"profile",
            element:<Profile />
          },
        ]
      },
      {
        path:"/contacts",
        element:<Contacts/>
      },
      {
        path:"/restaurantsMenu",
        element:<RestaurantMenu/>
      },
      {
        path:"/Instamart",
        element:(
          <Suspense fallback={<Shimmer/>}>
            <Instamart/>
          </Suspense>
        )
      },
      {
        path:"/dummy",
        element:(
          <Suspense fallback={<Shimmer/>}>
            <InstamartDummy/>
          </Suspense>
        )
      }
    ]
  }
]);








const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
