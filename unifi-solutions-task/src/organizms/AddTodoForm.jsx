import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Add } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todoSlice";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const isDark = useSelector((state) => state.theme.darkMode);

  return (
    <div>
      <Box className="fixed float-right right-10 bottom-10">
        <IconButton
          color="primary"
          onClick={handleOpen}
          className="shadow-md"
          style={{ backgroundColor: isDark ? "white" : "#c3cdff" }}
        >
          <Add />
        </IconButton>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="outline-none border-none"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add TODO
          </Typography>

          <form className="mt-5">
            <Box className="mb-5">
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                className="w-full"
                onChange={(e) => {
                  settitle(e.target.value);
                }}
              />
            </Box>

            <Box className="mb-5">
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                className="w-full"
                onChange={(e) => {
                  setdesc(e.target.value);
                }}
              />
            </Box>

            <Button
              variant="contained"
              className="float-right"
              onClick={() => {
                dispatch(
                  addTodo({
                    title,
                    desc,
                    isChecked: false,
                    createdAt: Date.now(),
                  })
                );
                setOpen(false);
              }}
            >
              Add
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
