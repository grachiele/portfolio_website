<<<<<<< HEAD
import React from 'react';
import ResumePDF from './ResumePDF';
import ResumeSVG from './ResumeSVG';

class Resume extends React.Component {

  render(){
    if (this.props.mobile === true) {
      return (
        <ResumeSVG />
      )
    } else {
      return (
        <ResumePDF />
      )
    }
  }
}

export default Resume
