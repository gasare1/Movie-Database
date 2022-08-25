import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,paddingRight:'20px',
  p: 4,
};

export default function SearchBarModal(props: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    props.clickedData.pop();
    setOpen(false);
  };
  React.useEffect(() => {
    if (props.clickedData.length) {
      handleOpen();
    }
  }, [props.clickedData.length]);


  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          {props.clickedData?.map((items: any) => (
            <>
              <Card sx={{ minWidth: 800, height: "100%" }}>
                <CardMedia
                  component="img"
                  height="500px"
                  image={items.Poster}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {items.Title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {items.Type} {items.Year}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
