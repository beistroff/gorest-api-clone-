import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useForm } from 'react-hook-form';
import { fetchAuthData, isAuth } from '../../redux/slices/auth';

import styles from './Login.module.scss';

export const Login = () => {
  const isAuthSelector = useSelector(isAuth);
  const dispatch = useDispatch();
  const { 
    register, 
    handleSubmit, 
    setError, 
    formState: { errors, isValid }
  } = useForm({
    defaultValues: {
      email: 'abc123@gmail.com',
      password: '123456',
    },
    mode: 'onChange'
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuthData(values));
    
    if (!data.payload) {
      return alert("You're not authorized!");
    }
    
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    } 

    //console.log(dispatch(fetchAuthData(values)))
    // dispatch(fetchAuthData(values));
  };

  if (isAuthSelector) {
    return <Navigate to="/" />;
  }

  console.log('isAuth', isAuthSelector);

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Log into an account
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="E-mail"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register('email', { required: 'Enter email'})}
          type="email"
          fullWidth
        />
        <TextField 
          className={styles.field} 
          label="Password" 
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register('password', { required: 'Enter password'})}
          fullWidth
        />
        <Button type="submit" size="large" variant="contained" fullWidth>
          Submit
        </Button>
      </form>
    </Paper>
  );
};