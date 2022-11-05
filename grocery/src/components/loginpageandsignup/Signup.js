import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    // for validation of data
    if (
      data.first_name !== "" &&
      data.last_name !== "" &&
      data.mobile_number !== "" &&
      data.email !== "" &&
      data.password !== ""
    ) {
      toast.success("successfully submitted");
      navigate("/Login");
      reset();

      // alert('successfully submitted')
    } else {
      toast.error("Fill empty field");
    }

    const signUpData = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      mobile_number: data.mobile_number,
    };
    axios
      .post(
        "https://uat.ordering-farmshop.ekbana.net/api/v4/auth/signup",
        signUpData
      )
      .then((response) => {
        console.log(response, "sigup sucess");
        localStorage.setItem("signup_email", data.email);
        localStorage.setItem(
          "signupinfo",
          JSON.stringify({
            email: data.email,
            mobile_number: data.mobile_number,
            password: data.password,
            singupId: response.data.data.id,
          })
        );
      })
      .catch((error) => {
        console.log(error, "signup failed");
      });
  };

  return (
    <>
      <div class="form">
        <h2>Create an account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="First Name..."
            {...register("first_name", { required: true })}
          />
          {errors.first_name && (
            <p style={{ color: "red", fontSize: "14px" }}>
              first name is required.
            </p>
          )}

          <input
            {...register("last_name", { required: true })}
            type="text"
            placeholder="Last Name..."
          />
          {errors.last_name && (
            <p style={{ color: "red", fontSize: "14px" }}>
              last name is required.
            </p>
          )}

          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email Address"
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "14px" }}>email is required</p>
          )}

          <input
            {...register("mobile_number", { pattern: /\d+/ })}
            type="text"
            placeholder="Mobile Number"
          />
          {errors.mobile_number && (
            <p
              style={{
                color: "red",
                fontSize: "14px",
              }}
            >
              mobile number must consists digit
            </p>
          )}

          <input
            {...register("password", {
              pattern: /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
            })}
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "14px" }}>
              password must consist atleast 6 character, must include number
            </p>
          )}

          {/* <input {...register('first_name',{required:true})} type='text' placeholder="Firstname"  />
        {errors.first_name && <p>Name is required.</p>}
        <input {...register('last_name',{required:true})} type='text' placeholder="Lastname"  />
        {errors.last_name && <p>Name is required.</p>}
      <input {...register('password', { required: true })} type='text' placeholder="Password"/>
      {errors.password && <p>Password is required.</p>} 
      < input {...register('email',{required:true})} type="text" name="email" placeholder="Email" />
      {errors.email && <p>Email address is required.</p>}
      < input {...register('mobile_number',{required:true})}  type='text'placeholder="Phone number" />
      {errors.mobile_number && <p>Phone number is required</p>}
      */}
          <input type="submit" value="Register" />
        </form>
      </div>
    </>
  );
};

export default Signup;
