import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./Register.css";
import Login from "../Login/Login";
import { UserContaxt } from "../../App";
import { light } from "@mui/material/styles/createPalette";
import Admin from "../Admine/Admin";

const Register = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContaxt);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await fetch("http://localhost:5000/addData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },

      body: JSON.stringify(data),
    });
  };
 
  
  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="register">
      <form className="ship-from" onSubmit={handleSubmit(onSubmit)}>
        <h4>Register as a Volunteer</h4>
        <input
          placeholder=" Full name"
          {...register("name", { required: true })}
          defaultValue={loggedInUser.name}
        />{" "}
        <br />
        {errors.name && (
          <span className="error">This name field is required</span>
        )}{" "}
        <br />
        <input
          placeholder="Your email"
          defaultValue={loggedInUser.email}
          {...register("email", { required: true })}
        />{" "}
        <br />
        {errors.email && (
          <span className="error">This email field is required</span>
        )}{" "}
        <br />
        <input
          placeholder="Your Address"
          {...register("address", { required: true })}
        />{" "}
        <br />
        {errors.address && (
          <span className="error">This address field is required</span>
        )}{" "}
        <br />
        <input
          placeholder=" Desicription "
          {...register("Desicription", { required: true })}
        />{" "}
        <br />
        {errors.Desicription && (
          <span className="error">This Desicription field is required</span>
        )}{" "}
        <br />
        <input
          placeholder=" Date " defaultValue={'2024/01/03'}
          {...register("Date", { required: true })}
        />{" "}
        <br />
        {errors.Date && (
          <span className="error">This Date field is required</span>
        )}{" "}
       
        <br />
        <input
          placeholder="Organize books at the library."
          {...register("Organize", { required: true })}
        />{" "}
        <br />
        {errors.Organize && (
          <span className="error">
            This Organize books at the library field is required
          </span>
        )}{" "}
        <br />
        <button className="btn btn-primary w-75" onClick={() => onSubmit}>
          Submit
        </button>
      </form>
      <ul>
      
      </ul>
    </div>
  );
};

export default Register;
