import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import './Login.scss';
import React, { useState } from "react";
import { AccountCircle } from "@mui/icons-material";
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import { authRepo } from "../../../api/authRepo";
import ErrorCard from "../ErrorCard";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [exceptionThrowned, setExceptionThrowned] = useState(false);
  const [user, setUser] = useState<IUser>();
  const [error, setError] = useState("");

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleLoginInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const credentials:ILoginCredentials = {
      username: username,
      password: password,
    }

    try {
      // spinner time
      await authRepo.loginUser(credentials);
      // spinner time
      navigate("/");
    } catch (error) {
      if (error instanceof Error)
      {
        setError(error.message);
        setExceptionThrowned(true);
      }
    }
  };

  return (
    <React.Fragment>
      { sessionStorage.getItem("token") != null ? <Navigate to="/" /> : 
      <div className="container">
        <Box className='login-box'>
          <Box className="logo">
                <h3>Thready</h3>
                <p>Zaloguj się do JKP Thready®</p>
            </Box>
          <form onSubmit={handleSubmit}>
            <FormControl variant="standard">
              <InputLabel htmlFor="login">
                Login
              </InputLabel>
              <Input
                  id="login"
                  type="text"
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                  value={username}
                  onChange={handleLoginInputChange}
                />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel htmlFor="password">
                Hasło
              </InputLabel>
              <Input
                id="outlined-adornment-password"
                type="password"
                startAdornment={
                  <InputAdornment position="start">
                    <KeyRoundedIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                    </IconButton>
                  </InputAdornment>
                }
                onChange={handlePasswordInputChange}
                value={password}
              />
            </FormControl>
            <ErrorCard error={error} isEnabled={exceptionThrowned} />
            <Button className="login-button"
                    variant="contained" 
                    type="submit">Zaloguj się</Button>
          </form>
        </Box>
      </div> }
    </React.Fragment>
  );
};