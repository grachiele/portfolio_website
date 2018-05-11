import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import './App.css';
import HomeContainer from './containers/HomeContainer'
import ContactContainer from './containers/ContactContainer'
import BlogContainer from './containers/BlogContainer'
import NavBar from './components/NavBar'
import AppBar from 'material-ui/AppBar';

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
      <Grid centered padded='vertically'>
        <AppBar
          title="Gianpaul Rachiele"
          onLeftIconButtonTouchTap={this.handleClick}
          />
        <NavBar open={this.state.open} handleToggle={this.handleClick}/>
        <Switch>
          <Route exact path="/" render={(props) => <HomeContainer {...props} />} />
          <Route exact path="/blog" render={(props) => <BlogContainer {...props} />} />
          <Route exact path="/contact" render={(props) => <ContactContainer {...props} />} />
          <Route exact path="/Resume.pdf" render={() => {
            console.log(process.env.PUBLIC_URL)
            {process.env.PUBLIC_URL + '/Resume.pdf'}
            }
          } />
          <Route render={() => <h1>404 error<br />Page not found<br /><br />Return <Link to='/'>Home</Link></h1>} />
        </Switch>
      </Grid>
    );
  }
}

export default App;
