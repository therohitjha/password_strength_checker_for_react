import { useEffect, useState, useCallback } from "react";

export default function PasswordStrengthChecker({ value }) {
  const [strength, setStrength] = useState(0);

  const getSetStrength = useCallback(() => {
    const hasNumber = /\d/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    let tempStrength = Math.min(6, Math.floor(value.length / 3));
    tempStrength +=
      value.length > 3
        ? hasNumber.test(value) +
          hasUpperCase.test(value) +
          hasLowerCase.test(value) +
          hasSpecial.test(value)
        : 0;
    setStrength(tempStrength);
  }, [value]);

  useEffect(() => {
    getSetStrength();
  }, [getSetStrength]);
  console.log("rohit", strength);

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
