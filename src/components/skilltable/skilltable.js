import React from 'react';
import './skilltable.css'


function skilltable(props) {


  return (
    <div className="rootAppBar">
          <table>
            <tr id="tableHeader" className="rellax" data-rellax-speed="2" data-rellax-percentage="0.4">
              <th>{props.header1}</th>
              <th id="skillHeader">{props.header2},</th> 
              <th id="skillHeader">{props.header3},</th> 
              <th id="skillHeader">{props.header4},</th> 
              <th id="skillHeader">{props.header5}</th> 
              <th>and able to {props.header6}</th>
            </tr>

            <tr id="row1" className="rellax" data-rellax-speed="3" data-rellax-percentage="0.5">
              <td></td>
              <td>HTML</td>
              <td>MySql</td>
              <td>Github</td>
              <td>React</td>
            </tr>

            <tr id="row2" className="rellax" data-rellax-speed="3" data-rellax-percentage="0.5">
              <td></td>
              <td>CSS</td>
              <td>MongoDB</td>
              <td></td>
              <td>Redux</td>
            </tr>

            <tr id="row3" className="rellax" data-rellax-speed="3" data-rellax-percentage="0.5">
              <td></td>
              <td>Javascript</td>
              <td>Node</td>
              <td></td>
              <td>jQuery</td>
            </tr>

            <tr id="row4" className="rellax" data-rellax-speed="3" data-rellax-percentage="0.5">
              <td></td>
              <td></td>
              <td>Express</td>
              <td></td>
              <td>Bootstrap</td>
            </tr>

            <tr id="row5" className="rellax" data-rellax-speed="3" data-rellax-percentage="0.5">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Material UI</td>
            </tr>
            
          </table>
    </div>
  );
}

export default skilltable;