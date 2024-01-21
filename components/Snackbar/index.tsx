import React, { useState } from 'react';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface SnackbarProps {
  isSnackbar: boolean;
  value: string;
}

const Snackbar: React.FC<SnackbarProps> = ({ isSnackbar, value }) => {
  const [open, setOpen] = useState(isSnackbar);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={3000} 
      onClose={handleClose}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        severity="success"
        onClose={handleClose}
      >
        {value}
      </MuiAlert>
    </MuiSnackbar>
  );
};

export default Snackbar;
