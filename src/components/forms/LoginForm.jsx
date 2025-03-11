import { useState} from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import Button from "./Button";
import FormError from "./FormError";
import authService from "../../services/authService.js";

const LoginForm = () => {
  // useState hook manages component state (form fields and error messages).
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //Update state on input change
  const handleChange = (e) => {
    if (!e || !e.target) return; // Ensure e is defined
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  //Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try{
      //Send POST request to login endpoint
      //Axios return a promise; we use async/await to handle it
      await authService.login(formData);
      alert("Login successful!");
      navigate(`/character/create`);
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return(
    <form onSubmit={handleSubmit}>
      {error && <FormError message={error} />}
      <InputField type="username" name="username" label="Username" onChange={handleChange} />
      <InputField type="password" name="password" label="Password" onChange={handleChange} />
      <Button type="submit" label="Login" />
    </form>
  );
};

export default LoginForm;