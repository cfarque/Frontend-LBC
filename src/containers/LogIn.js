import React, { useState } from "react";
import Login from "../components/LogIn/Login";

function LogIn({ setUser, user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Login
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      setUser={setUser}
    />
  );
}

export default LogIn;
