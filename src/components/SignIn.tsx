import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";

const SignIn = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
      <Container component="main" maxWidth="xs" style={{ marginTop: "25%" }}>
        {isLoading ? (
          <div>Carregando</div>
        ) : (
          <Box component="form" noValidate sx={{ mt: 1 }}>

            <Typography variant="h2" component="div">
              Login
            </Typography>

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <TextField
              required
              fullWidth
              id="pass"
              label="Senha"
              type="password"
              helperText="Senha inválida"
            />

            <Button type="submit" variant="outlined" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>

          </Box>

        )}

      </Container>
  );
};

export default SignIn;
