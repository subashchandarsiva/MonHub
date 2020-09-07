import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

class Monsters extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState({ monsters: users }))
    );
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <>
        <input
          className="input_style"
          type="search"
          placeholder="search"
          onChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
        />{" "}
        <CardList monsters={filteredMonsters} />
      </>
    );
  }
}

export default Monsters;
