import {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

export default function AlertDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="secondary" style={{borderRadius: "20px", padding: "10px", fontFamily: "Grotesk"}} onClick={handleClickOpen}>
        Le saviez-vous ? 
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{fontFamily: "Grotesk"}}>
          Cette application a été dévelopée avec le coeur 💖
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{fontFamily: "Grotesk"}}>
            J'ai terminé le cursus de l'école 42, et j'ai très envie de travailler chez Greenly ✨
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" startIcon={<DeleteIcon />} style={{fontFamily: "Grotesk"}}>Bof...</Button>
          <Button onClick={handleClose} autoFocus  color="success" endIcon={<DoneIcon />} style={{fontFamily: "Grotesk"}}>
            On adore !
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
