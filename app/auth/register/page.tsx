"use client";

import { useState } from "react";
import Link from "next/link";
import { register } from "@/services/auth/apiService";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onchange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await register(dispatch, query);
  };

  return (
    <Box className="flex flex-col items-center justify-center h-[700px] bg-gray-100">
      <Box className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <Typography variant="h5" className="pb-8" gutterBottom>
          Register Page
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box className="mb-8">
            <TextField
              name="name"
              onChange={(e) => onchange(e)}
              value={query.name}
              label="Name"
              variant="outlined"
              fullWidth
              required
            />
          </Box>

          <Box className="mb-8">
            <TextField
              name="email"
              onChange={(e) => onchange(e)}
              value={query.email}
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              required
            />
          </Box>

          <Box className="mb-4">
            <TextField
              name="password"
              onChange={(e) => onchange(e)}
              value={query.password}
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              required
            />
          </Box>

          <Button
            type="submit"
            className="bg-primary py-4 my-4 hover:bg-secondary"
            variant="contained"
            color="primary"
            fullWidth
          >
            Create account
          </Button>
        </form>
        <Box className="mt-4">
          Already have an account?{" "}
          <Link href="/auth/login">
            <Typography className="text-blue-500">Login here</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterPage;
