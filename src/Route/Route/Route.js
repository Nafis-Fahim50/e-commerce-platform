import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import OrderFrom from "../../pages/Order/OrderForm/OrderFrom";
import Products from "../../pages/Products/Products";
import Signup from "../../pages/Signup/Signup";

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
                element: <OrderFrom></OrderFrom>,
                loader: ({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    },
    
])

export default router;