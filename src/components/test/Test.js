import React, { Component } from "react";

export default class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  // componentWillMount() {
  //   console.log("gonna fire");
  // }

  // componentDidUpdate() {
  //   console.log("updated");
  // }

  // componentWillUpdate() {
  //   console.log("gonna update");
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("gonna receive new props");
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("fgetSnapshotBeforeUpdate");
  // }

  render() {
    const { title, body } = this.state;

    return (
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    );
  }
}
