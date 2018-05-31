import React, { Component } from 'react';

export default class App extends Component {


  constructor(props) {
    super(props);
    this.state = { firebaseUID : '', mediaMathSessionId: 'loading' };
  }

  render() {

      if (this.state.firebaseUID =='loading'){
        return (
          <Router>
              <div style={{padding: '20px'}}>
                ..loading
              </div>
          </Router>
        );
      }  else  {

      return (
        <Router>
        <div>

            <Route path="/" render={(props) => (
              <MuiThemeProvider muiTheme={muiTheme}>
                <Navbar firebaseUID={this.state.firebaseUID}  email={this.state.email }/>
              </MuiThemeProvider>
                )} />


        </div>
        </Router>
      );
      }
    }
  }
