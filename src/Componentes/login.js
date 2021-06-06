import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Link} from 'react-router-dom';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Soy Usuario
      </Button>
      <Dialog  open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">LogIn</DialogTitle>
        <DialogContent >
          <DialogContentText>
            Ingresa usuario y contraseña.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Usuario"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Contraseña"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions className="Dialog">
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="inherit">
          {<Link to='/Secciones/Usuario'>Confirmar</Link>}
          </Button>
        </DialogActions>
      </Dialog>
      <br/>
      <br/>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
      Registrate
      </Button>
    </div>
  );
}