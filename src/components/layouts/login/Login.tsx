import { Box, FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import './Login.scss';
import React from "react";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';

export default function Login() {
  return (
    <React.Fragment>
      <div className="container">
        <Box className='login-box'>
          <FormControl variant="standard">
            <InputLabel htmlFor="login">
              Login
            </InputLabel>
            <Input
                id="login"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="password">
              Password
            </InputLabel>
            <Input
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
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
              label="Password"
            />
          </FormControl>
        </Box>
      </div>
    </React.Fragment>
  );
};