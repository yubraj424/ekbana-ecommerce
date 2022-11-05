import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formHandler = (data) => {
    console.log(data);

    axios
      .post(
        "https://uat.ordering-farmshop.ekbana.net/api/v4/contact-us",
        {
          message: data.Message,
          subject: data.Subject,
          email: data.email,
          name: data.Name,
          contact: data.Telephone,
        },
        {
          headers: {
            "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
            "Warehouse-Id": "1",
            // Authorization: localStorage.getItem("access_token"),
          },
        }
      )
      .then((response) => {
        console.log(response, "success");
        toast.success("your feedback has been sent");
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
        <input {...register("Name", { required: true })} placeholder="Name" />
        <br />
        <input {...register("email", { required: true })} placeholder="Email" />
        <br />
        <input
          {...register("Telephone", { required: true })}
          placeholder="Telephone"
        />
        <br />
        <input
          {...register("Subject", { required: true })}
          placeholder="Subject"
        />
        <br />
        <input
          {...register("Message", { required: true })}
          placeholder="Message"
        />
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

export default Contact;

// import React from 'react'

// function Contact() {
//   return (
//  <div>
//       <div class="mail">
//     <h3>Mail Us</h3>
//     <div class="agileinfo_mail_grids">
//       <div class="col-md-4 agileinfo_mail_grid_left">
//         <ul>
//           <li><i class="fa fa-home" aria-hidden="true"></i></li>
//           <li>address<span>868 1st Avenue NYC.</span></li>
//         </ul>
//         <ul>
//           <li><i class="fa fa-envelope" aria-hidden="true"></i></li>
//           <li>email<span><a href="mailto:info@example.com">info@example.com</a></span></li>
//         </ul>
//         <ul>
//           <li><i class="fa fa-phone" aria-hidden="true"></i></li>
//           <li>call to us<span>(+123) 233 2362 826</span></li>
//         </ul>
//       </div>
//       <div class="col-md-8 agileinfo_mail_grid_right">
//         <form action="#" method="post">
//           <div class="col-md-6 wthree_contact_left_grid">
//             <input type="text" name="Name" value="Name*" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name*';}" required=""/>
//             <input type="email" name="Email" value="Email*" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email*';}" required=""/>
//           </div>
//           <div class="col-md-6 wthree_contact_left_grid">
//             <input type="text" name="Telephone" value="Telephone*" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Telephone*';}" required=""/>
//             <input type="text" name="Subject" value="Subject*" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Subject*';}" required=""/>
//           </div>
//           <div class="clearfix"> </div>
//           <textarea  name="Message" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message...';}" required="">Message...</textarea>
//           <input type="submit" value="Submit"/>
//           <input type="reset" value="Clear"/>
//         </form>
//       </div>
//       <div class="clearfix"> </div>
//     </div>
//   </div>
//   </div>
//   )
// }

// export default Contact
