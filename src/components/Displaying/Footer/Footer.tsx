import {useState} from 'react';
//import Butt on from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
//import { motion, useViewportScroll, useTransform } from "framer-motion";
//import {Motion, spring} from 'react-motion';
//import { CSSTransition} from 'react-transition-group';
  //import { Container, Button, Alert } from 'react-bootstrap';
  //import { CSSTransition } from 'react-transition-group';



export default function AlertDialog() {
  const [open, setOpen] = useState(false);

  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //const { scrollYProgress } = useViewportScroll();
  //const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  const [inProp, setInProp] = useState(false);

  return (
    <div>
      <CSSTransition in={inProp} timeout={200} classNames="my-node">
      <Button color="secondary" style={{borderRadius: "20px", padding: "10px", fontFamily: "Grotesk"}} onClick={handleClickOpen}>
        Le saviez-vous ? 
      </Button>
      </CSSTransition>
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
      {/*<div className="wrapper">
        <motion.div
          className="container"
          style={{
            scale
          }}
        >
          <motion.div
            className="item"
            style={{
              scaleY: scrollYProgress
            }}
          />
        </motion.div>
      </div>*/}
    </div>
  );
}
