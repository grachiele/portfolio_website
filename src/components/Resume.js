import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

class Resume extends Component {
  state = {
    numPages: 1,
    pageNumber: 1,
  }

  render() {
    const { pageNumber } = this.state;

    return (
      <Document
        file="/Resume.pdf"
        onLoadSuccess={this.onDocumentLoad}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    );
  }
}


export default Resume
