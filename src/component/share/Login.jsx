import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hocks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
    const {sinInUser,gooleSingIn } = useAuth()
    // console.log(gooleSingIn,gooleSingIn)
    const [loginError,setLoginError] = useState('');
      //navigation system
      const Navigate = useNavigate()
      const location = useLocation()
    //   console.log(location)
      const from = location?.state || '/'
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        // console.log(data)
        setLoginError('')
        const { email, password} = data;
        sinInUser(email,password)
        .then(result => {
            // console.log(result.user);
            if (result.user) {
                Navigate(from)
            }
        })
        .catch(error => {
            console.log(error)
            setLoginError(error.message)
        })
    }
    const handaleSocilLogin = socialProvider => {
        socialProvider()
        .then(result => {
            // console.log(result.user)
            if (result.user) {
                const userInfo= result.user;
                const email= userInfo.email;
                const name = userInfo.displayName;
                const role = "buyer";
                const uIfo={email,name,role}

                console.log(uIfo)
                Navigate(from)
            }
        })
    }
    return (
        <div className="flex justify-center items-center hero min-h-screen bg-black bg-opacity-50">
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-50 bg-opacity-50 ">
            <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
            <p className="text-sm text-center dark:text-gray-600">Dont have account?
                <Link to="/register"  rel="noopener noreferrer" className="focus:underline hover:underline font-bold text-green-600 ">Sign up here</Link>
            </p>
            <div className="my-6 space-y-4">
                <button onClick={()=> handaleSocilLogin(gooleSingIn)} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                    <p>Login with Google</p>
                </button>
            </div>
            <div className="flex items-center w-full my-4">
                <hr  className="w-full dark:text-gray-600" />
                <p className="px-3 dark:text-gray-600">OR</p>
                <hr  className="w-full dark:text-gray-600" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-4">
                    <div className="">
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" placeholder="Email" className="bg-black w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" 
                        {...register("email", { required: true })} 
                        />
                            {errors.email && <span  className="text-red-500">This field is required</span>}
                    </div> <br />
                    <div className="">
                        <label htmlFor="email" className="text-sm">Password</label>
                        <input id="email" type="password" placeholder="password" className="bg-black w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" 
                        {...register("password", { required: true })} 
                        />
                        {errors.password && <span  className="text-red-500">This field is required</span>}
                    </div>
                </div>
                {
                        loginError && <p className="text-red-700">{loginError}</p>
                    }
                <button type="submit" className="btn w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
            </form>
        </div>
    </div>
    );
};

export default Login;