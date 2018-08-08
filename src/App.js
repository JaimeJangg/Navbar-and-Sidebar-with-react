import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import sideDrawer from './components/SideDrawer/SideDrawer';
import backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  state = {
    SideDrawerOpen: false 
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {SideDrawerOpen: !prevState.SideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({SideDrawerOpen: false});
  };
  
  render() {
    let backdrop;

    if (this.state.SideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.SideDrawerOpen}/>
        {backdrop}
        <main style={{marginTop: '64px'}}>
          <p>this is the page content</p>
        </main>
      </div>
    );
  }
}

export default App;
