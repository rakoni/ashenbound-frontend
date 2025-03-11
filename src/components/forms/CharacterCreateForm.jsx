import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormError from "./FormError.jsx";
import InputField from "./InputField.jsx";
import Button from "./Button.jsx";
import characterService from "../../services/characterService.js";


const CharacterCreateForm = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkCharacter = async () => {
      try {
        const response = await characterService.checkIfUserHasCharacter();
        if (response.data.exists) {
          navigate("/register");
        }
      } catch (err) {
        console.error("Error checking character:", err);
      }
    };
    checkCharacter();
  }, [navigate]);
  const handleChange = (e) => {
    if(!e || !e.target) return;
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try{
      await characterService.createCharacter({name});
      alert("Character created successfully!");
      navigate("/register");
    } catch (err) {
      setError("There is already a character with that name, please choose another.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    {error && <FormError message={error} />}
    <InputField type="text" name="characterName" label="Character Name" onChange={handleChange} />
    <Button type="submit" label="Create" />
  </form>
  );
};



export default CharacterCreateForm;