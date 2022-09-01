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
import { useAuth } from "../contexts/AuthContextProvider";
import Button from "@mui/material/Button";

export default function InputAdornments() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const { register, error } = useAuth();

  function handleRegister() {
    if (password !== confirm) {
      alert("Passwords do not match, please try again");
      return;
    }
    register(username, password);
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
      <Box
        sx={{
          width: "40%",
          display: "flex",
          flexWrap: "wrap",
          marginTop: "40px",
          border: " 1px solid #D3D3D3",
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
          <FormControl sx={{ m: 1, width: "52ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password2"
              type={values.showPassword ? "text" : "password"}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
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
          onClick={() => handleRegister()}
        >
          Register
        </Button>
      </Box>
    </div>
  );
}
