
import React from "react";
import  ReactDOM from "react-dom";
import {useParams, Route,Routes,Link } from "react-router-dom"


export default class Page2 extends React.Component {

constructor(props) {
    super(props);
    this.state = { isOn: true };
    console.log(props);
  }

  render() {
    let id = 5;
    return <div>Page2:

    


    </div>;
  }
}



