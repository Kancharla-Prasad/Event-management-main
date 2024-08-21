import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Modal, Box } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
export default function SubEventCard({ subEvent }) {
  function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
      <React.Fragment>
        <Button onClick={handleOpen}>Register</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <h2 id="child-modal-title">Are you sure to register</h2>

            <Button>Pay now</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 1300 }}>
          <h2 id="parent-modal-title">{subEvent.name} Instructions</h2>
          <p id="parent-modal-description" style={{ whiteSpace: "pre-wrap" }}>
            {/* {String(subEvent.instructions).replace(/\n/g, "<br>")} */}
            {subEvent.instructions}
          </p>
          <ChildModal />
        </Box>
      </Modal>

      <Card sx={{ maxWidth: 350, margin: "auto", marginTop: "1rem" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            src={subEvent.image}
            alt="event image"
            style={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography gutterBottom component="div">
              {subEvent.name} - {subEvent.registration_price}
            </Typography>
            {/* <Typography
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
              {subEvent.description}
            </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleOpen}>
            Give it a try
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
