import { Alert, Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const FetchProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const url = "https://dummyjson.com/products";

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((respData) => {
        console.log(respData);
        setData(respData.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      {isLoading ? (
        <Alert>Carregando</Alert>
      ) : (
        data.map((produto) => (
          <Grid xs={2}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={produto.thumbmail}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {produto.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {produto.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default FetchProducts;
