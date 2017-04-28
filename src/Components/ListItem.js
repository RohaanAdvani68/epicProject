import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

class ListItem extends Component{
  constructor(props)
  {
    super(props);
    this.state={
        className:"",
        numFriendsInt:0,
    }
  }
}
