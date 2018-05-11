import React from 'react'
import { Button, Grid, Header, Icon, Modal } from 'semantic-ui-react'
import Resume from './Resume'

class ProjectModals extends React.Component {

  constructor(){
    super()

    this.state = {
      modalOpen1: false,
      modalOpen2: false,
      modalOpen3: false,
      modalOpen4: false
    }
  }

  handleOpen1 = () => {
      this.setState({ modalOpen1: true })
  }

  handleClose1 = () => {
      this.setState({ modalOpen1: false })
  }

  handleOpen2 = () => {
      this.setState({ modalOpen2: true })
  }

  handleClose2 = () => {
      this.setState({ modalOpen2: false })
  }

  handleOpen3 = () => {
      this.setState({ modalOpen3: true })
  }

  handleClose3 = () => {
      this.setState({ modalOpen3: false })
  }

  handleOpen4 = () => {
      this.setState({ modalOpen4: true })
  }

  handleClose4 = () => {
      this.setState({ modalOpen4: false })
  }

  render() {
    return (
      <Grid.Column width={16} padded="horizontally">
      <h5>Check out some of my projects below!</h5>

      <Modal
        trigger={<Button basic color='black' onClick={this.handleOpen1}>Tekcit</Button>}
        open={this.state.modalOpen1}
        onClose={this.handleClose1}
        >
        <Modal.Content>
          <Modal.Description>
            <Header>Tekcit</Header>
            <p>I built a login portal, using Ruby on Rails, that allows users to create accounts and save their information. I created a frontend flow, with Ruby on Rails and Semantic UI, to populate theater locations and showtimes. I developed a database with Ruby on Rails to store user information. I constructed an interactive front end using Ruby on Rails and Semantic UI for styling.</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <a href="https://github.com/grachiele/Tekcit-Movies" target="_blank" rel="noopener noreferrer"><Button primary>
            Tekcit Github Repo
          </Button></a>
          <a href="https://tekcit-movies.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Button primary>
            Visit Tekcit
          </Button></a>
          <Button negative onClick={this.handleClose1}>
            Close <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
      <Modal
        trigger={<Button basic color='black' onClick={this.handleOpen2}>ToDo Trackr</Button>}
        open={this.state.modalOpen2}
        onClose={this.handleClose2}
        >
        <Modal.Content>
          <div className="video-container video-container-16x9">
            <iframe title="ToDo Trackr" src="https://www.youtube.com/embed/2E3oana8Yfw" gesture="media" allowFullScreen></iframe>
          </div>
          <Modal.Description>
            <Header>ToDo Trackr CLI App</Header>
            <p>I created a CLI using Ruby, that stores user todos in Ruby objects and fetches current local weather from an API.</p>

          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <a href="https://github.com/bperl/module-one-final-project-guidelines-web-071717"target="_blank" rel="noopener noreferrer"><Button primary onClick={this.handleClose2}>
            ToDo Trackr Github Repo <Icon name='right chevron' />
          </Button></a>
          <Button negative onClick={this.handleClose2}>
            Close <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
      <Modal
        trigger={<Button basic color='black' onClick={this.handleOpen3}>SubjecTutor</Button>}
        open={this.state.modalOpen3}
        onClose={this.handleClose3}
        >
        <Modal.Content>
          <div className="video-container video-container-16x9">
            <iframe title="ToDo Trackr" src="https://www.youtube.com/embed/mZntF0vnvvI" gesture="media" allowFullScreen></iframe>
          </div>
          <Modal.Description>
            <Header>SubjecTutor</Header>
            <p>I built a login portal, using React for the frontend and Ruby on Rails for the backend, to authenticate users. I used Virtual DOM in React to dynamically render pages without a hard refresh, to decrease page load times. I utilized a PostGRESQL database, through Ruby on Rails, to save and populate user information. I created a dynamic frontend, using React and Semantic UI-React, to show user preferences.</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <a href="https://github.com/grachiele/tutor_app_frontend" target="_blank" rel="noopener noreferrer"><Button primary>
            Frontend Github Repo <Icon name='right chevron' />
          </Button></a>
          <a href="https://github.com/grachiele/tutor_app_backend" target="_blank" rel="noopener noreferrer"><Button primary>
            Backend Github Repo <Icon name='right chevron' />
          </Button></a>
          <Button negative onClick={this.handleClose3}>
            Close <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
      <Modal
        trigger={<Button basic color='black' onClick={this.handleOpen4}>Resume</Button>}
        open={this.state.modalOpen4}
        onClose={this.handleClose4}
        >
        <Modal.Content scrolling>
          <Grid>
            <Grid.Column width={2} />
            <Grid.Column>
              <Resume />
            </Grid.Column>
            <Grid.Column width={2} />
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={this.handleClose4}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
      <a href='/resume' rel="noopener noreferrer"><Button basic color='black'>Resume (for mobile)</Button></a>
      </Grid.Column>
    )
  }
}


export default ProjectModals
