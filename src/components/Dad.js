//I am a class component 
    //You need me (for now) because I control state. Without me, how will you
        //control state???? ---You can't (unless you use Hooks, but not now)

import React, { Component } from 'react';
import Son from './Son'

// How do we receive props from a parent component? (something is missing here in our constructor)

export default class  extends Component {
    constructor(){
        super();

    }  

    // below, we will need to pass state to our children
    // Also, we need to put an onClick on the button, using the toggle method
    render() {
    return (
      <div>
        <Son/>
        <button>Receive Inheritance</button>
      </div>
    )
  }
}
