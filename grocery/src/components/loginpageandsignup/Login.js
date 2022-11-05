import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Signup from "./Signup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [login, setLogin] = useState(true);
  const logHandler = () => {
    setLogin(!login);
  };
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitlogin = (data) => {
    if (data.email !== "" && data.password !== "") {
      toast.success("form submitted successfully");
      reset();
      navigate("/");
    } else {
      toast.error("fill up empty fields");
    }
    // console.log(data, "login");
    axios
      .post("https://uat.ordering-farmshop.ekbana.net/api/v4/auth/login", {
        client_id: "2",
        client_secret: "2TJrcyMbXT6gDQXVqeSlRbOKvtTfMsuxfuK6vpey",
        grant_type: "password",
        username: data.email,
        password: data.password,
      })
      .then((response) => {
        console.log(response, "loginsucessful");
        //  access_token chai localStorage ma save garna parxa for authentication
        localStorage.setItem("access_token", response.data.access_token);
      })

      .catch((error) => {
        console.log(error, "loginfailed");
      });
  };
  return (
    <div>
      <div class="w3_login">
        <h3>Sign In & Sign Up</h3>
        <div class="w3_login_module">
          <div class="module form-module">
            <div class="toggle">
              <i class="fa fa-times fa-pencil"></i>
              <div class="tooltip" onClick={() => logHandler()}>
                Click Me
              </div>
            </div>

            {login === true ? (
              <>
                <div class="form">
                  <h2>Login to your account</h2>
                  <form onSubmit={handleSubmit(onSubmitlogin)}>
                    <input
                      {...register("email", { required: true })}
                      type="text"
                      placeholder="Username/Email"
                    />
                    {errors.email && (
                      <p style={{ color: "red" }}>
                        Username/Email is required.
                      </p>
                    )}
                    <input
                      {...register("password", { required: true })}
                      type="text"
                      placeholder="Password"
                    />
                    {errors.password && (
                      <p style={{ color: "red" }}>Enter a Password</p>
                    )}
                    <input type="submit" value="Login" />
                  </form>
                </div>
              </>
            ) : (
              <>
                <Signup />
              </>
            )}

            <div class="cta">
              <a href="/forgetpassword">Forgot your password?</a>
            </div>
          </div>
        </div>
        {/* <script>
				$('.toggle').click(function(){
				  // Switches the Icon
				  $(this).children('i').toggleClass('fa-pencil');
				  // Switches the forms  
				  $('.form').animate({
					height: "toggle",
					'padding-top': 'toggle',
					'padding-bottom': 'toggle',
					opacity: "toggle"
				  }, "slow");
				});
			</script> */}
      </div>
    </div>
  );
};

export default Login;
