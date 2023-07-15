import React from "react";
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export const Header = () => {
  const isAuth = true;
  
  const onClickLogout = () => {};

  return (
    <div className="root">
      <Container maxWidth="lg">
        <header>
          <Link to="/" className="header-brand">GoREST Clone</Link>
          {isAuth ? (
            <>
              <nav>
                <ul>
                  <li>
                    <Link to="/users">
                      <Button variant="outlined">Users</Button> 
                    </Link>
                  </li> 
                  <li>
                    <Link to="/">
                      <Button onClick={onClickLogout} variant="contained" color="error">Log out</Button> 
                    </Link>
                  </li>     
                </ul>
              </nav>
            </>
          ) : (
            <>
              <nav>
                <ul>
                  <li>
                    <Link to="/login">
                      <Button variant="outlined">Log in</Button>
                    </Link>
                  </li>    
                  <li>
                    <Link to="/register">
                      <Button variant="contained">Register</Button>
                    </Link>
                  </li>    
                </ul>
              </nav>
            </>
          )}
        </header>
      </Container>
    </div>
  );
};