import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formHandler = (data) => {
    console.log("first");
    if (data.email !== "") {
      Navigate("/login");
    }
    axios
      .post(
        "https://uat.ordering-farmshop.ekbana.net/api/v4/auth/forgot-password",
        {
          email: localStorage.getItem("signup_email"),
        },
        {
          headers: {
            "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          toast.info("Your password reset link is sent to your email");
        }
      })
      .catch((error) => {
        console.log(error, "fail");
      });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(formHandler)}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "10px",
          border: "1px solid grey",
          padding: "10px",
        }}
      >
        <input {...register("email", { required: true })} placeholder="Email" />
        <br />
        <input
          type="submit"
          value="Submit"
          style={{
            display: "flex",
            width: "80px",
            padding: "10px",
            justifyContent: "center",
            margin: "auto",
            backgroundColor: "greenyellow",
          }}
        />
      </form>
    </div>
  );
};

export default ForgetPassword;
