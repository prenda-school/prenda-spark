import React from 'react';
import { AppBar, Toolbar, withStyles } from '@material-ui/core/';
import { PrendaMonogramDark } from './logos';
import { colorsPrendaMediumGrey } from './theme';

export type NavbarProps = {
  children: React.ReactChild | React.ReactChild[];
};

export const Navbar = (props: NavbarProps) => {
  /**
   * Navbar
   *
   */

  const PrendaAppBar = withStyles({
    root: {
      borderBottom: `2px solid ${colorsPrendaMediumGrey}`,
    },
  })(AppBar);

  return (
    <PrendaAppBar position="fixed" color="inherit" elevation={0}>
      <Toolbar>
        <PrendaMonogramDark fontSize="62px" />
        {props.children}
      </Toolbar>
    </PrendaAppBar>
  );
};
