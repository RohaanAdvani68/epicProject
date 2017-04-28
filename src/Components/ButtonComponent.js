import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

class ButtonContainer extends Component{
  constructor(props)
  {
    super(props);
    this.state={
        label:"",
        goToPage:props.goTo,
    }
  }
}
