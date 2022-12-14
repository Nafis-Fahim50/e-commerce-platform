import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyOrders from "../../pages/Order/MyOrders/MyOrders";
import OrderFrom from "../../pages/Order/OrderForm/OrderFrom";
import Products from "../../pages/Products/Products";
import Signup from "../../pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <Signup></Signup>
            },
            {
                path:'/products',
                element: <Products></Products>
            },
            {
                path:'products/:id',
                element: <PrivateRoute><OrderFrom></OrderFrom></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path:'orders',
                element:<PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            }
        ]
    },
    
])

export default router;