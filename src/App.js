import "./App.css";
import React from "react";
import CountriesList from "./components/countries-list/country-list";
import SearchBox from "./components/search/search";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      searchField: "",
    };
  }

  async componentDidMount() {
    const users = await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    this.setState({ countries: users });
  }

  changeSearchField = (e) => {
    this.setState({ searchField: e.target.value });
  };

  // with each re-render this function will run
  getFilteredCountries = () => {
    const filteredCountries = this.state.countries.filter((country) =>
      country.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    return filteredCountries;
  };

  render() {
    return (
      <div className="App">
        <SearchBox
          changeHandler={this.changeSearchField}
          placeholder="Search for a country"
        />
        <CountriesList countries={this.getFilteredCountries()} />
      </div>
    );
  }
}

export default App;
