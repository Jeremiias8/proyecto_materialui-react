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
          image="../src/assets/img/landscape.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Title of a longer featured blog post
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what is most interesting in this posts
            contents.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Continue reading...</Button>
        </CardActions>
      </Card>

      <div className="sub-cards">

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="landscape"
            width="240"
            height="200"
            image="../src/assets/img/landscape.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Featured post
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Continue reading...</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="landscape"
            width="240"
            height="200"
            image="../src/assets/img/landscape.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Post title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Continue reading...</Button>
          </CardActions>
        </Card>

      </div>
      
    </div>
  );
};
