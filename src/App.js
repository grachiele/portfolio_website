import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import './App.css';
import HomeContainer from './containers/HomeContainer'
import ContactContainer from './containers/ContactContainer'
import BlogContainer from './containers/BlogContainer'
import NavBar from './components/NavBar'
import AppBar from 'material-ui/AppBar';
import Resume from './components/Resume'

class App extends Component {

  constructor(){
    super()
    this.state = {
      open: false
    }

  }

  handleClick = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <React.Fragment>
        <Grid centered padded='vertically'>
          <AppBar
            title="Gianpaul Rachiele"
            onLeftIconButtonTouchTap={this.handleClick}
            />
            <NavBar open={this.state.open} handleToggle={this.handleClick}/>
        </Grid>
        <Switch>
          <Route exact path="/" render={(props) => <HomeContainer {...props} />} />
          <Route exact path="/blog" render={(props) => <BlogContainer {...props} />} />
          <Route exact path="/contact" render={(props) => <ContactContainer {...props} />} />
          <Route exact path="/resume" render={(props) => <Resume />} />
          <Route render={() => <h1>404 error<br />Page not found<br /><br />Return <Link to='/'>Home</Link></h1>} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
