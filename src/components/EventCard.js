import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export default function EventCard() {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto", marginTop: "1rem" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="data:image/jpeg;base64,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"
          alt="green iguana"
          style={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              textAlign: "start",
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              whiteSpace: "noraml",
              WebkitLineClamp: 5,
            }}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to="/event/eventName" style={{ textDecoration: "none" }}>
            Read More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
