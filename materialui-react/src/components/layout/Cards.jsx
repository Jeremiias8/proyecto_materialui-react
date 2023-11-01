import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Cards = () => {
  return (
    <div className="cards">
      <Card sx={{ maxWidth: 545 }}>
        <CardMedia
          component="img"
          alt="landscape"
          width="500"
          height="360"
          image="../src/assets/img/react.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Proyecto React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what is most interesting in this posts
            contents.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Continue looking other portafoly...</Button>
        </CardActions>
      </Card>

      <div className="sub-cards">

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="landscape"
            width="240"
            height="200"
            image="../src/assets/img/angular.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Angular 15 - Food order project
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Continue looking other portafoly...</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="landscape"
            width="240"
            height="200"
            image="../src/assets/img/nodejs.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              API REST - NodeJS/ExpressJS
              /MongoDB
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Continue looking other portafoly...</Button>
          </CardActions>
        </Card>

      </div>
      
    </div>
  );
};
