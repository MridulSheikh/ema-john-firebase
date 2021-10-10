import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import"./../login/login.css";

const Singup = () => {
    const {singinUsingGoogle} = useAuth();
    return (
        <div>
        <div className="login">
        <div className="from">
        <h2>Create new <span className="orange">Account</span></h2>
        <form>
        <label htmlFor="" className="dispaly">E-mail or phone Number : </label>
        <input type="text" className="dispaly" required />
        <label htmlFor="" className="dispaly">Enter your password : </label>
        <input type="password" className="dispaly" required />
        <label htmlFor="" className="dispaly">Re-enter your password : </label>
        <input type="password" className="dispaly" required />
        <button className="singoutbtn">Sing up</button>
        </form>
        <p className="center">or</p>
        <div>
        <button className="google" onClick={singinUsingGoogle}>Continue with Google</button>
        <Link to="/login"> <button className="singupbtn">Already have an account</button></Link>
        </div>
        </div>
       </div>
        </div>
    );
};

export default Singup;