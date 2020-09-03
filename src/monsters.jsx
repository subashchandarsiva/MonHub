import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

class Monsters extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState({ monsters: users }))
    );
  }
  render() {
    return (
      <CardList>
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}{" "}
      </CardList>
    );
  }
}

export default Monsters;
