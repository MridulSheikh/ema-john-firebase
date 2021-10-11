import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/UseAuth';
import "./shiping.css"
const Shipping = () => {
    const {user} = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="shippingdiv">
        <form onSubmit={handleSubmit(onSubmit)} className="shippingForm">
        <h1 className="shippinglogo">Shipping</h1>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue={user.email} {...register("E-mail")} className="shippinginput" />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })}  className="shippinginput" placeholder="Address" />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span className="errorhandle">This field is required</span>}
      
      <input type="submit" className="shippinginput submit"  />
    </form>
    </div>
    );
};

export default Shipping;