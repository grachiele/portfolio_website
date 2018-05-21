import React from 'react'
import Home from '../components/Home'
import { Grid } from 'semantic-ui-react'

class HomeContainer extends React.Component{

  render(){
    return(
      <Grid centered padded='vertically'>
        <Home />
      </Grid>
    )
  }
}

export default HomeContainer
