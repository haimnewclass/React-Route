
import React from "react";
import ReactDOM from "react-dom";
import {useParams, Route,Routes,Link ,BrowserRouter, Router } from "react-router-dom"

export default class Page1 extends React.Component {

constructor(props) {
    super(props);
    console.log(props);
    this.state = { isOn: true };
  }

  render() {
    return <div>Page1 
      
      
      {this.props.itemId} {this.props.name}*</div>;
  }
}

export const p = new Page1;


