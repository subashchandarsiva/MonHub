import React, { Component } from "react";
import "./monsters.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/searchbox.component";

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
      <div>
        <h1 className="pagetitle">Monsters Point</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default Monsters;
