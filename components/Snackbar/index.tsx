import React from 'react';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

interface SnackbarProps {
  open: boolean;
  message: string;
  close: Function
}

const Snackbar: React.FC<SnackbarProps> = ({ open, message, close }) => {
  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={3000} 
      onClose={() => close()}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
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
