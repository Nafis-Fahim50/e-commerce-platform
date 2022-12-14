import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProver';

const Login = () => {
    const {userLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            form.reset()
            toast.success('successfully login')
            const currentUser = {
                email :user.email
            }
            // get jwt token 
            fetch('https://e-commerce-server-two.vercel.app/jwt',{
                method: 'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('access-token',data.token);
            });
            navigate(from,{replace:true})
        })
        .catch(err =>{
            toast.error(err.message)
        })
    }
    return (
        <section className="h-screen">
            <div className="px-6 h-full text-gray-800">
                <div
                    className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                >
                    <div
                        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                    >
                       <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="" />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form onSubmit={handleLogin}>
                            <h1 className='text-3xl font-bold text-blue-600 mb-5'>Please Login</h1>
                            <div className="mb-6">
                                <input
                                    type="email"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput1"
                                    name='email'
                                    placeholder="Email address"
                                />
                            </div>

                           
                            <div className="mb-6">
                                <input
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Password"
                                    name='password'
                                />
                            </div>

                            <div className="text-center lg:text-left">
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                    Login
                                </button>
                                <p className="text-sm  font-semibold mt-2 pt-1 mb-0">
                                    Don't have an account?
                                    <Link
                                        to="/signup"
                                        className="text-red-600 ml-2 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                    >Register</Link
                                    >
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;