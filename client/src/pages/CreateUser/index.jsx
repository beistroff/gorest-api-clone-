import React from "react";
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import styles from "./CreateUser.module.scss";

export const CreateUser = () => {
  return (
    <div className={styles.root}>
        <div className={styles.userMenu}>
            <Link to='/'>
                <Button variant='contained' color='success'>Get users list</Button>
            </Link>
            <Link to='/'>
                <Button variant='contained'>Create user</Button>
            </Link>
        </div>
    </div>
  );
};