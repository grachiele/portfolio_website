import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Grid } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {

  render() {
    return (
      <Grid.Row>
        <Drawer open={this.props.open} docked={false} onRequestChange={this.props.handleToggle}>
          <NavLink to='/'><MenuItem onClick={this.props.handleToggle}>Home</MenuItem></NavLink>
          <NavLink to='/resume'><MenuItem onClick={this.props.handleToggle}>Home</MenuItem></NavLink>
          <NavLink to='/blog'><MenuItem onClick={this.props.handleToggle}>Blog</MenuItem></NavLink>
          <NavLink to='/contact'><MenuItem onClick={this.props.handleToggle}>Contact</MenuItem></NavLink>
        </Drawer>
      </Grid.Row>
    );
  }
}

export default Nav
