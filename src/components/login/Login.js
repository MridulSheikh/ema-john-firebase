import React from 'react';
import { Link,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import "./login.css"
const Login = () => {
    const {singinUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/shop";
    const handlegooglelogin = () =>{
        singinUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
    }
    return (
        <div className="login">
            <div className="from">
            <h2>Login <span className="orange">Now</span></h2>
            <form>
            <label htmlFor="" className="dispaly">E-mail or phone Number : </label>
            <input type="text" className="dispaly" required />
            <label htmlFor="" className="dispaly">Enter your password : </label>
            <input type="password" className="dispaly" required />
            <button className="singoutbtn">Sing in</button>
            </form>
            <p className="center">or</p>
            <div>
            <button className="google" onClick={handlegooglelogin}>Continue with Google</button>
            <Link to="/singup"> <button className="singupbtn">create a new account</button></Link>
            </div>
            </div>
        </div>
    );
};

export default Login;