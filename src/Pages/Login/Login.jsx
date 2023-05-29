import "../Login/style.css";
import Hello from "../Login/Components-Login/Hello";
import { validatePassword2 } from "../Login/Components-Login/RegexLogin";
import React, { useState } from "react";
import users from "../../users";
import { useNavigate } from "react-router-dom";
import Img from "../Login/Components-Login/Img";
import LoginList from "../Login/Components-Login/LoginList";
import axios from 'axios';

function Login() {
  const [password2, setPassword2] = useState("");
  const [passwordErr2, setPasswordErr2] = useState(false);

  const validate2 = () => {
    if (!validatePassword2.test(password2)) {
      setPasswordErr2(true);
    } else {
      setPasswordErr2(false);
    }
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const loginData = {
      username: username,
      password: password,
    };
  
    axios
      .post('http://localhost:3000/api/v2/users/login', loginData)
      .then((response) => {
        const { access_token } = response.data;
        if (access_token) {
          navigate('/home');
        } else {
          alert('Erro ao logar-se');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="central">
        <Img />

        <div className="left">
          <Hello />

          <LoginList
            onLogin={handleLogin}
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />

          <aside>
            <p className="pcenter" id="pCenter">
              Novo por aqui? <strong>Registre-se</strong>
            </p>
          </aside>
        </div>
      </div>
    </>
  );
}

export default Login;
