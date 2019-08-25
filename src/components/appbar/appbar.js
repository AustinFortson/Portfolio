import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Resume from '../pdfs/Resume.pdf'
import './appbar.css'

function scrollAboutMe() {
  window.scrollTo(0, 490);
}

function scrollPortfolio() {
  window.scrollTo(0, 710);
}

function scrollContactMe() {
  window.scrollTo(0, 1070);
}

function scrollName() {
  window.scroll(0, 0);
}


function ButtonAppBar() {


  return (
    <div>
      <AppBar id="appBar">
        <Toolbar id="toolBar">
          <Typography variant="h6" id="appBarHeader" onClick={scrollName}>
            Austin Fortson
          </Typography>
          <Button id="appBarButtons" onClick={scrollAboutMe}>About Me</Button>
          <Button id="appBarButtons" onClick={scrollPortfolio}>Portfolio</Button>
          <Button id="appBarButtons" onClick={scrollContactMe}>Contact</Button>
          <Button id="appBarButtons" href={Resume} target="_blank">Resume</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;