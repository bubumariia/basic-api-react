import React from "react";
import { useEffect } from "react";

class FetchAPI extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  async componentDidMount() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();
      this.setState({ data: data });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { data } = this.state;
    return (
      <>
        <h3>{"Name : " + data.name}</h3>
        <h3>{"Website : " + data.website}</h3>
        <h3>{"Email : " + data.email}</h3>
        <h3>{"Phone : " + data.phone}</h3>
      </>
    );
  }
}

export default FetchAPI;
