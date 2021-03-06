// Code DelayedButton Component Here
import React from 'react';
import onReceiveCoordinates from '../index'

class DelayedButton extends React.Component {

  render(){
    return(
      <button
      onClick={(event) => setTimeout(()=> {
        this.props.onDelayedClick(event);
      }, this.props.delay)}
      >
        Click
      </button>
    )
  }
}
export default DelayedButton;
