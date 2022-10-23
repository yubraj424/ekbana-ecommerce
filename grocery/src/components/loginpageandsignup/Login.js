import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Signup from "./Signup";

const Login = () => {
  const [login, setLogin] = useState(true);
  const logHandler = () => {
    setLogin(!login);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitlogin = (data) => {
    console.log(data, "login");
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
                  <form  onSubmit={handleSubmit((data) => console.log(data))}>
				 
				  <input {...register('userName')} type='text' name='Username' placeholder="Username" />
				  {errors.userName && <p>Username is required.</p>}
				  <input {...register('password')} type='text' name="Password" placeholder="Password"/>
				  {errors.password && <p>Enter a Password</p>}
                    <input type="submit" value="Login" />
                  </form>
                </div>
              </>
            ) : (
              <>
             <Signup/>
              </>
            )}

            <div class="cta">
              <a href="#">Forgot your password?</a>
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
