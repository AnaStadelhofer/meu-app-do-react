import { Alert, Avatar, Button, Card, CardContent, Divider, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Link from '@mui/material/Link';

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
            
            <Card>

              <Typography style={{textAlign: "center"}}variant="h2">
                Login
              </Typography>
              <Avatar alt="Cindy Baker" sx={{ width: 75, height: 75}} src="/static/images/avatar/3.jpg" />
                <CardContent>
                  <TextField
                    margin="normal"
                    required
                    fullWidth 
                    id="email"
                    label="E-mail"
                    name="email"
                    autoFocus
                  />

                  <TextField
                    required
                    fullWidth
                    margin="normal"
                    id="pass"
                    label="Senha"
                    type="password"
                  />

                  <Button type="submit" variant="outlined" onClick={() => alert('Erro no sistema')} sx={{ mt: 3, mb: 2 }}>
                    Sign In
                  </Button>

                  <Divider />
                  
                  <Link color="inherit">
                    Esqueceu a senha?
                  </Link>

              </CardContent>
            </Card>
          </Box>
          
        )}

      </Container>
  );
};

export default SignIn;
