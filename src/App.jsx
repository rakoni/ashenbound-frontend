import { Routes, Route} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import CharacterCreate from "./pages/CharacterCreate.jsx"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/character/create" element={<CharacterCreate />} />
      </Routes>
    </div>
  )
}

export default App
