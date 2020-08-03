import React, { Component } from "react";
import CardList from "../components/CardList";
// import { Robots } from "./Robots";
import Scroll from "../components/Scroll";
import Searchbox from "../components/Searchbox.js";
// import { render } from "@testing-library/react";
//import { render } from "@testing-library/react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Robots: [],
      searchfiled: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ Robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfiled: event.target.value });
    //console.log(filteredRobot);
  };

  render() {
    const { Robots, searchfiled } = this.state;
    const filteredRobot = Robots.filter((Robots) => {
      return Robots.name.toLowerCase().includes(searchfiled.toLowerCase());
    });
    if (!Robots.length) {
      return <h1 className="tc">Loading.....</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robo Friends</h1>
          <Searchbox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList Robots={filteredRobot} />
          </Scroll>
        </div>
      );
    }
  }
}
export default App;
