import React, { Component } from 'react';
import ResumePDF from './ResumePDF'
import ResumeSVG from './ResumeSVG'
import { Radio } from 'semantic-ui-react'

class Resume extends Component {

  state = {
    toggle: false
  };

  handleToggle = (event) => {
    this.setState({toggle: !this.state.toggle})
  }

  render() {

    const resume = !this.state.toggle ? <ResumePDF /> : <ResumeSVG />

    return (
      <div>
        <div style={{textAlign: "center"}}>
          <Radio toggle label="Switch to Mobile Version" onChange={this.handleToggle}/>
        </div>
        <br />
        <br />
        <div>
          {resume}
        </div>
      </div>
    );
  }
}


export default Resume
