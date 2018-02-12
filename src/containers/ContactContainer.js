import React from 'react'
import Contact from '../components/Contact'
import { Grid } from 'semantic-ui-react'

class ContactContainer extends React.Component{

  render(){
    return(
      <Grid stackable centered>
        <h1>Catch me on:</h1>
        <Contact />
      </Grid>
    )
  }
}

export default ContactContainer
