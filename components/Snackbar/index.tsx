import React, { useState } from 'react';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface SnackbarProps {
  open: boolean;
  message: string;
  close: Function
}

const Snackbar: React.FC<SnackbarProps> = ({ open, message, close }) => {
  // console.log(isSnackbar, 'isSnackbar');
  // const [open, setOpen] = useState(isSnackbar);

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={3000} 
      onClose={() => close()}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        severity="success"
        onClose={() => close()}
      >
        {message}
      </MuiAlert>
    </MuiSnackbar>
  );
};

export default Snackbar;
