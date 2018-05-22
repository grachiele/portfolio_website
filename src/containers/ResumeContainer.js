import React from 'react';
import ResumePDF from './../components/ResumePDF';
import ResumeSVG from './../components/ResumeSVG';

class ResumeContainer extends React.Component {

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

export default ResumeContainer
