import React from 'react';
import { styled } from '@mui/system';
import { ColorPaletteProps } from '@/types/Color';
import Box from '@mui/material/Box';

interface CircularElementProps {
  bgColor?: string;
}

const CircularElement = styled('div')<CircularElementProps>(({ bgColor }) => ({
  width: 30,
  height: 30,
  borderRadius: '50%',
  background: bgColor || 'blue',  
}));

const ColorPalette = ({ colors }: ColorPaletteProps) => {
  return (
    <Box gap={2} className="flex ">
      {colors.map((color, index) => (
        <CircularElement key={index} bgColor={color} />
      ))}
    </Box>
  );
};

export default ColorPalette;
