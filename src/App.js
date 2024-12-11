import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import AboutClass from "./components/AboutClass";
import Test from "./components/Test";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.querySelector("#root"));

styleCard = {
  backgroundColor: "white",
};

// just wrap the Provider component over the components u want the store to be accsible
// if u wrap around only header then only in header u can access the appStore
// pass the prop 'store' to the Provider component
//console.log(appStore);
//console.log(appStore.cart);
const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      //
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],

    errorElement: <Error />,
  },

  // {
  //   path: "/About",
  //   element: <About />,
  // },
]);

root.render(<RouterProvider router={appRouter} />);
