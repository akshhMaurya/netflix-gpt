import { useState } from "react";
import Header from "./Header";

const Login = () => {
    return (
        <div >
            <Header />
            <div className="absolute" >
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/74ad4564-16d3-4179-9935-ee024f51525b/web_tall_panel/IN-en-20250210-TRIFECTA-perspective_c6373f88-3280-489b-813b-3df7c055277c_large.jpg" alt="login" />
            </div>
            <LoginForm />
        </div>
    )
}

const LoginForm = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        // <div className="w-3/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <form className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-black text-white bg-opacity-70">
                <h1 className="font-bold text-3xl py-4">{isSignUp ? "Sign Up" : "Sign In"}</h1>
                {isSignUp && (
                    <input type="text" placeholder="Username" className="p-4 my-4 bg-gray-700 rounded w-full"/>
                )}
                <input type="email" placeholder="Email" className="p-4 my-4  bg-gray-700 rounded w-full"/>
                <input type="password" placeholder="Password" className="p-4 my-4 bg-gray- 700 rounded w-full"/>
                <button type="submit" className="p-4 my-4  w-full bg-red-700 rounded-lg">{isSignUp ? "Sign Up" : "Sign In"}</button>
                <p className="text-sm text-gray-400">
                    {isSignUp
                        ? "Already have an account? "
                        : "Don't have an account? "}
                    <span className="text-white cursor-pointer" onClick={toggleForm}>
                        {isSignUp ? "Sign In" : "Sign Up"}
                    </span>
                </p>
            </form>
        // </div>
    )
}

export default Login;