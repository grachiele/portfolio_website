import React from 'react'
import { Grid } from 'semantic-ui-react'
import FaMedium from 'react-icons/lib/fa/medium'
import FaGithubSquare from 'react-icons/lib/fa/github-square'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'

class Contact extends React.Component {

  render(){
    return(
      <Grid.Row verticalAlign='top'>
        <Grid.Column width={5} verticalAlign="middle">
          <a href='https://www.medium.com/@gianpaul.r' target="_blank" rel="noopener noreferrer"><FaMedium height="100px" width="100px" color="#00ACC1" /></a>
        </Grid.Column>
        <Grid.Column width={5} verticalAlign="middle">
          <a href="https://github.com/grachiele" target="_blank" rel="noopener noreferrer"><FaGithubSquare height="100px" width="100px" color="#00ACC1" /></a>
        </Grid.Column>
        <Grid.Column width={5} verticalAlign="middle">
          <a href="https://www.linkedin.com/in/gianpaul-rachiele-b8261278/" target="_blank" rel="noopener noreferrer"><FaLinkedinSquare height="100px" width="100px" color="#00ACC1" /></a>
        </Grid.Column>
      </Grid.Row>
    )
  }


}

export default Contact
