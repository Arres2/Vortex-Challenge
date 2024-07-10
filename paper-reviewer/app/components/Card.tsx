import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from "../../public/logo.svg"

export default function PaperCard() {
  return (
    <Card sx={{ maxWidth: 345, minHeight:345, margin: 3}}>
      <CardContent sx={{ maxWidth: 345, minHeight:345}}>
        <Typography gutterBottom variant="h5" component="div">
          Some type of paper
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque omnis adipisci at alias nihil quod labore non quia quis beatae possimus vel autem sit, magni assumenda distinctio tempora ipsum blanditiis?
        </Typography>
      </CardContent>
    </Card>
  );
}