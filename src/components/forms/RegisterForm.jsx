import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import Button from "./Button";
import FormError from "./FormError";
import authService from "../../services/authService.js";

const RegisterForm = () => {
  const [formData, setFormData] = useState({username: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if(formData.password !== formData.confirmPassword){
      setError("Passwords do not match!");
      return;
    }

    try {
      await authService.register(formData);
      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      setError("Error creating account!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <FormError message={error} />}
      <InputField type="username" name="username" label="Username" onChange={handleChange} />
      <InputField type="password" name="password" label="Password" onChange={handleChange} />
      <InputField type="password" name="confirmPassword" label="Confirm Password" onChange={handleChange} />
      <InputField type="email" name="email" label="Email" onChange={handleChange} />
      <Button type="submit" label="Register" />
    </form>
  );
};

export default RegisterForm;