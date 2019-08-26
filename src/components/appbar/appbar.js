import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Resume from '../pdfs/Resume.pdf'
import './appbar.css'


function ButtonAppBar() {

/*Back To Top Function*/
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

  return (
    <div className="rootAppBar">
      <AppBar id="appBar">
        <Toolbar id="toolBar">
          <Typography variant="h6" id="appBarHeader" onClick={topFunction}>
            Austin Fortson
          </Typography>
          <Button id="appBarButtons" href="#layer3">About Me</Button>
          <Button id="appBarButtons" href="#layer4" >Portfolio</Button>
          <Button id="appBarButtons" href="#layer5">Contact</Button>
          <Button id="appBarButtonsResume" href={Resume} target="_blank">Resume</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;