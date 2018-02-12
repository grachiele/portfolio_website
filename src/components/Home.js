import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import ProjectModals from './ProjectModals'

class Home extends React.Component {

  render(){
    return(
      <Grid stackable>
        <Grid.Row>
            <Grid.Column width={3}>

            </Grid.Column>
            <Grid.Column width={5} verticalAlign="middle" className="picture">
              <Image className='picture' src={require('../img/FullSizeRender_1_60.jpg')} />
            </Grid.Column>
            <Grid.Column width={5} verticalAlign='middle' textAlign="left" >
              <p>Hey, I'm Gianpaul. I graduated from the 15 week Full Stack Development Immersive at the Flatiron School in Manhattan. My interest in programming started in Graduate School at Stony Brook University when I took a Computational Linguistics course as part of my coursework towards a Master's Degree in Linguistics. I worked at learning Python on my own for a while and then decided to take my learning to the next level by attending a bootcamp. That's where Flatiron came in. There I learned Ruby, Ruby on Rails, Javascript, React and Redux. Below you can see some demos of the projects I've worked on.</p>
            </Grid.Column>
            <Grid.Column width={3}>

            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <ProjectModals />
        </Grid.Row>
      </Grid>
    )
  }
}

export default Home
