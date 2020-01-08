import React, { Component } from "react";

class Apitester extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch("https://go-hello-world-aestandard.appspot.com/getjson")
      //.then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return <div>Code Goes Here</div>;
  }
}

export default Apitester;
