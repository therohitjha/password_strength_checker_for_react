import "./styles.css";
import PasswordStrengthChecker from "./components/PasswordStrengthChecker";
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
      <div style={{ width: "40%", margin: "1rem" }}>
        <PasswordStrengthChecker password={password} />
      </div>
    </div>
  );
}
