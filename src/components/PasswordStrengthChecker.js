import { useEffect, useState, useCallback } from "react";
import "./styles.css";

const hasNumber = /\d/;
const hasUpperCase = /[A-Z]/;
const hasLowerCase = /[a-z]/;
const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

export default function PasswordStrengthChecker({ password }) {
  const [strength, setStrength] = useState(0);

  const getSetStrength = useCallback(() => {
    let tempStrength = Math.min(6, Math.floor(password.length / 3));
    tempStrength +=
      password.length > 3
        ? hasNumber.test(password) +
          hasUpperCase.test(password) +
          hasLowerCase.test(password) +
          hasSpecial.test(password)
        : 0;
    setStrength(tempStrength);
  }, [password]);

  useEffect(() => {
    getSetStrength();
  }, [getSetStrength]);

  if (typeof password !== "string")
    return (
      <div>
        Expecting password type as string but received {typeof password}
      </div>
    );

  return (
    <div className="container">
      <div
        className="progress-bar"
        style={{
          width: strength * 10 + "%",
          backgroundColor:
            strength > 8 ? "green" : strength > 5 ? "orange" : "red"
        }}
      ></div>
    </div>
  );
}
