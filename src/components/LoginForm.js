import { FormGroup, TextField, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

const LoginForm = ()=>({ handleSetUser }) {
  const [loginFormState, setLoginFormState] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  useEffect(() => {}, []);

  const onFormChange = (event) =>
    setLoginFormState({
      ...loginFormState,
      [event.target.name]: event.target.value,
    });

  const handleSubmit = (e) => {
	e.preventDefault();
    
      const data =  axios
	  .post(`${API_URL}/login`, loginFormState, {
        withCredentials: true,
      });
      handleSetUser(data.data);
      console.log(data.data.isTeacher, "Brummie login data");
      setLoginFormState({});

      if (data.data.isTeacher === true) {
        navigate("/teacher-profile");
      } else {
        navigate("/student-profile");
      }

  };
  return (
    <div>
      <FormGroup>
        <TextField
          id="filled-basic1"
          label="email"
          variant="filled"
          name="email"
          onChange={onFormChange}
          value={loginFormState.email}
          type="email"
          required
        />
        <TextField
          id="filled-basic2"
          label="password"
          variant="filled"
          name="password"
          type="password"
          onChange={onFormChange}
          value={loginFormState.password}
          required
        />
        <Button type="submit" variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </FormGroup>
    </div>
  );
}

export default LoginForm;
