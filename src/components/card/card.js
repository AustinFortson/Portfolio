import React from 'react';
import Grid from '@material-ui/core/Grid';
import './card.css'

class Card extends React.Component {
  render () {
    return (
    <div className="card">
      <div className="innerCard">
        <div className="frontCard">
        <Grid item xs={12}>
          <img id="image" src={this.props.image} alt="portfolioImg"/>
        </Grid>
        <Grid item xs={12}>
          <h1 id="frontTitle">{this.props.title}</h1>
        </Grid>
        </div>
      <div className="backCard">
      <Grid item xs={12}>
        <h1 id="backTitle">{this.props.title}</h1>
        </Grid>
      <Grid item xs={12}>
        <h3 id="technologies">{this.props.technologies}</h3>
        </Grid>
      <Grid item xs={12}>
        <p id="description">{this.props.description}</p>
        </Grid>
      <Grid item xs={12}>
        <div className="buttons">
        <p id="code" href={this.props.codeLink}>Code</p>
        <p id="demo" href={this.props.demoLink}>Demo</p>
        </div>
      </Grid>
      </div>
      </div>
    
    </div>
  );
}
}

export default Card;