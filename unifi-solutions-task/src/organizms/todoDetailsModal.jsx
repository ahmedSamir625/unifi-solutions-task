import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

export default function TodoDetailsModal({ todo, isOpen, handleOpenDetails }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(isOpen);
  const handleClose = () => {
    setOpen(false);
    handleOpenDetails();
  };

  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {todo.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {todo.desc}
          </Typography>
          {todo.createdAt && (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {`Created At ${new Date(todo.createdAt).toLocaleString()}`}
            </Typography>
          )}
          {todo.archivedAt && (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {`Archived At ${new Date(todo.archivedAt).toLocaleString()}`}
            </Typography>
          )}
          {todo.checkedAt && (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {`Checked At ${new Date(todo.checkedAt).toLocaleString()}`}
            </Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
}
