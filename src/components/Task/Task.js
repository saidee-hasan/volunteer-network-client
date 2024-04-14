import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Task.css";
import { Link } from "react-router-dom";

const Task = ({ task }) => {
  return (
    <div>
      <Card className="card" sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="170"
          image={require(`../../assets/images/${task.pic}`)}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {task.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Link to={'/register'}>
          <Button size="small">Learn More</Button></Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Task;
