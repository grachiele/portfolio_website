import React from 'react'

const ResumePDF = () => {
  return (
    <embed src={require("./Resume.pdf")} width="100%" height="1000px" type="application/pdf" />
  );
}

export default ResumePDF;
