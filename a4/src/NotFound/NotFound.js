import React, { Component } from 'react';
//switch to correct directory
import MainContainer from '../MainContainer/MainContainer';

class NotFound extends Component {

  render() {

    return (

      <MainContainer>
        
        <h1 className="page-header">Not Found</h1>

        <div className="row">
          <br/><br/>
          <strong>Page NOt Found!</strong>

        </div>
      </MainContainer>
    );

  }
}

export default NotFound;
