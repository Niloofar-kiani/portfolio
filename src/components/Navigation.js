import React from 'react';
import { Link} from "react-router-dom"

import {AppBar, Toolbar} from '@mui/material';
import { createUseStyles } from 'react-jss';


const Navigation = () => {
  return (
    <>
        <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>

    </>
  )
}

export default Navigation