import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

class ListComponent extends Component{
  constructor(props)
  {
    super(props);
    this.state={
        classes:Array(10).fill(null),//max 10 classes in list
        classCounter:0,
    }
  }
}
