import React from 'react'
import '../../index.css'
import { Link } from 'react-router-dom';

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { VscArrowDown } from 'react-icons/vsc';

export const Seemore = () => {

  return (
    <div className="cards-more">

      <button className='btn-back'>
        <Link to="/inicio">Volver</Link>
      </button>  

      <Card sx={{ maxWidth: 440 }}>
        <CardMedia
          component="img"
          alt="landscape"
          width="500"
          height="360"
          image="../src/assets/img/react.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Proyecto jQuery
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what is most interesting in this posts
            contents.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">More on my GitHub below <VscArrowDown />
          </Button>
        </CardActions>
      </Card>

      <div className="sub-cards">

        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            alt="landscape"
            width="240"
            height="200"
            image="../src/assets/img/angular.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Proyecto TypeScript - CRUD Pelis 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">More on my GitHub below <VscArrowDown />
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            alt="landscape"
            width="240"
            height="200"
            image="../src/assets/img/nodejs.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Proyecto Bootstrap - Componentes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">More on my GitHub below <VscArrowDown />
            </Button>
          </CardActions>
        </Card>

      </div>    
    </div>
  );

}
