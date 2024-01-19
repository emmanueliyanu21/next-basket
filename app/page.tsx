"use client";
import React from 'react';
import { ThemeProvider } from "@emotion/react";
import { theme } from '../utils/theme'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages';

export default function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Header />
        <Navbar /> 
        <Home />
      </ThemeProvider>
    </React.StrictMode>
  )
}
