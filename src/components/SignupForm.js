import React, { useState, useEffect } from "react";
import {
  TextField,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  FormGroup,
} from "@mui/material";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

const SignupForm = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    password: "",
    country: "",
    city: "",
    isTeacher: true,
  });
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const onFormChange = (event) =>
    setFormState({ ...formState, [event.target.name]: event.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/signup`, formState)
      .then(() => navigate("/login"))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <FormGroup>
        <TextField
          id="filled-basic1"
          label="full name"
          variant="filled"
          name="fullName"
          onChange={onFormChange}
          value={formState.fullName}
          required
        />

        <TextField
          id="filled-basic2"
          label="email"
          variant="filled"
          name="email"
          onChange={onFormChange}
          value={formState.email}
          type="email"
          required
        />
        <TextField
          id="filled-basic3"
          label="password"
          variant="filled"
          name="password"
          onChange={onFormChange}
          value={formState.password}
          type="password"
          required
        />
        <TextField
          id="filled-basic4"
          label="country"
          variant="filled"
          name="country"
          onChange={onFormChange}
          value={formState.country}
        />
        <TextField
          id="filled-basic5"
          label="city"
          variant="filled"
          name="city"
          onChange={onFormChange}
          value={formState.city}
        />
        <FormLabel id="demo-controlled-radio-buttons-group">
          Who are you?
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="isTeacher"
          value={formState.isTeacher}
          onChange={onFormChange}
        >
          <FormControlLabel value={false} control={<Radio />} label="Student" />
          <FormControlLabel value={true} control={<Radio />} label="Teacher" />
        </RadioGroup>

        <Button type="submit" variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </FormGroup>
    </div>
  );
};

export default SignupForm;
