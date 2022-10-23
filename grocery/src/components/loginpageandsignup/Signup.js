import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data, "signup");
  };

  return (
    <>
      <div class="form">
        <h2>Create an account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName',{required:true})} type='text' placeholder="Firstname"  />
        {errors.firstName && <p>Firstname is required.</p>}
      <input {...register('lastName', { required: true })} type='text' placeholder="Lastname"/>
      {errors.lastName && <p>Lastname is required.</p>} 
      < input {...register('email',{required:true})} type="text" name="email" placeholder="Email" />
      {errors.email && <p>Email address is required.</p>}
      < input {...register('mobile_number',{required:true})}  type='text'placeholder="Phone number" />
      {errors.mobile_number && <p>Phone number is required</p>}
     
          <input type="submit" value="Register" />
        </form>
      </div>
    </>
  );
};

export default Signup;
