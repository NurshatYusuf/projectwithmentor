import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useAuth } from "../contexts/AuthContextProvider";

export default function InputAdornments() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useAuth();

  function handleLogin() {
    login(username, password);
  }

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <h2>{error}</h2>
      <Box
        className="box"
        sx={{
          width: "40%",
          display: "flex",
          flexWrap: "wrap",
          marginTop: "40px",
          border: " 1px solid #808080",
          "&:hover": { border: " 1.5px solid #808080" },
          borderRadius: "10px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            margin: "20px 70px",
            display: "flex",
            flexWrap: "wrap",
            width: "90%",
            justifyContent: "center",
          }}
        >
          <TextField
            label="Name"
            value={username}
            id="outlined-start-adornment"
            onChange={(e) => setUserName(e.target.value)}
            sx={{ m: 1, width: "52ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
          />

          <FormControl sx={{ m: 1, width: "52ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        <Button
          variant="contained"
          sx={{ marginBottom: "20px" }}
          onClick={() => handleLogin()}
        >
          Login
        </Button>
      </Box>
    </div>
  );
}
