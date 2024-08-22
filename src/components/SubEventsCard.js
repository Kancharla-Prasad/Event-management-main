import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
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
  
  const [childOpen, setChildOpen] = React.useState(false);
    const handleChildOpen = () => {
      setChildOpen(true);
    };
    const handleChildClose = () => {
      setChildOpen(false);
    };
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <React.Fragment>
        <Modal
          open={childOpen}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <h2 id="child-modal-title">Are you sure to register</h2>

            <Button>Pay now</Button>
            <Button onClick={handleChildClose}>Cancel</Button>
          </Box>
        </Modal>
      </React.Fragment>
      <React.Fragment>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {`${subEvent.name} Instructions`}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
            {subEvent.instructions}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleChildOpen}>
              Register Now
            </Button>
            <Button onClick={handleClose} autoFocus>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
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
          <Button size="small" color="primary" onClick={handleClickOpen}>
            Give it a try
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
