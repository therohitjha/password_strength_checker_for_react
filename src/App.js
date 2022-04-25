import "./styles.css";
import PasswordStrengthChecker from "./PasswordStrengthChecker";
import { useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");
  return (
    <div className="App">
      <input
        placeholder={"Enter Password..."}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <PasswordStrengthChecker value={password} />
    </div>
  );
}
