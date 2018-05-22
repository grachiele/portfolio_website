import React, { Component } from 'react';
import { Radio } from 'semantic-ui-react';
import Resume from './../components/Resume';

class ResumeContainer extends Component {

  state = {
    toggle: false
  };

  handleToggle = (event) => {
    this.setState({toggle: !this.state.toggle})
  }

  render() {

    return (
      <div>
        <div style={{textAlign: "center"}}>
          <Radio toggle label="Switch to Mobile Version" onChange={this.handleToggle} />
        </div>
        <br />
        <br />
        <div>
          <Resume mobile={this.state.toggle} />
        </div>
      </div>
    );
  }
}

export default ResumeContainer
