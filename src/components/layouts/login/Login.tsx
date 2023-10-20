import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import './Login.scss';
import React, { useState } from "react";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import { authRepo } from "../../../api/authRepo";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

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

    const xd = await authRepo.loginUser(credentials);
    console.log(xd);
  };

  return (
    <React.Fragment>
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
                type={showPassword ? 'text' : 'password'}
                startAdornment={
                  <InputAdornment position="start">
                    <KeyRoundedIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                onChange={handlePasswordInputChange}
                value={password}
              />
            </FormControl>
            <Button className="login-button"
                    variant="contained" 
                    type="submit">Zaloguj się</Button>
          </form>
        </Box>
      </div>
    </React.Fragment>
  );
};