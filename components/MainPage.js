import React, { Component } from "react";
import Head from "../components/Head";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: props.robots,
      searchField: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <Head>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </Head>
    );
  }
}

export default MainPage;
