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
