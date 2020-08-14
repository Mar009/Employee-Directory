import React from 'react';
import employees from "./employeeRoster.json";
import './App.css';
import Wrapper from "./components/wrapper";
import Header from "./components/header";
import Buttons from "./components/buttons";
import Results from "./components/results";
import Container from "./components/container";


//components to render
class App extends React.Component {
  //setting the states in the roster
  state = {
    employees: [],
    firstNameSort: "ASC",
    LastNameSort: "ASC",
    userInput: "",
    results: []
  };
  //search name
  searchName = (value) => {
    this.findFirstName(this.state.employees, 0, value);
    this.findLastname(this.state.employees, 0, value);
  };
  //mount
  componentDidMount() {
    this.setState({ employees: employees });
    this.setState({ results: employees });
  }
  //finding the first name
  findFirstName(names, index, letter) {
    var filterFirstnames = [];
    names.forEach(thisName => {
      var checkFirst = thisName.firstName;
      var checkLower = checkName.toLowerCase();
      if (lowerName.startsWith(letter.toLowerCase(), 0)) {
        filterFirstnames.push(thisName);
      }

    });
    this.setState({ results: filterFirstnames });
  }
  //finding the last name
  findLastName(names, index, letter) {
    var filterLastnames = [];
    names.forEach(thisName => {
      var checkLast = thisName.LastName;
      var checkLower = checkName.toLowerCase();
      if (lowerName.startsWith(letter.toLowerCase(), 0)) {
        filterLastnames.push(thisName);
      }

    });
    this.setState({ results: filterLastnames });
  }

  //logic for asc & desc comparisons
  ascCompare(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }

  descCompare(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
    return 0;
  }

  //sort by first & last name
  sortByFirstName = () => {
    let sortedEmployeesFirst = this.state.employees;
    sortedEmployeesFirst.sort();
    //sort
    var orderSort = this.state.sortName;
    var items = this.state.employees;
    items.sort(orderSort === 'ASC' ? this.ascCompare : this.descCompare);
    if (orderSort === 'ASC') {
      orderSort = 'DESC';
    } else { orderSort = 'ASC'; }
    this.setState({
      employees: sortedEmployeesFirst,
      sortName: orderSort
    })
  }

  sortByLastName = () => {
    let sortedEmployeesLast= this.state.employees;
    sortedEmployeesLast.sort();
    //sort
    var orderSort = this.state.sortName;
    var items = this.state.employees;
    items.sort(orderSort === 'ASC' ? this.ascCompare : this.descCompare);
    if (orderSort === 'ASC') {
      orderSort = 'DESC';
    } else { orderSort = 'ASC'; }
    this.setState({
      employees: sortedEmployeesLast,
      sortName: orderSort
    })
  }


handleInputChange = event => {
  const value = event.target.value;
  const name = event.target.name;

  // Updating the input's state
  this.setState({
    [name]: value
  });
  this.searchName(value);
};

render() {
  return (
    <Wrapper>
      <Header>Employees</Header>
      <Container>

        <form className="search">
          <div className="form-group">
            <input
              value={this.state.userInput}
              name="userInput"
              type="text"
              className="form-control"
              placeholder="Search by name"
              id="employee"
              onChange={this.handleInputChange}
              style={{ width: "30%", margin: "0 auto", marginLeft: "auto", marginRight: "auto" }}
            />

          </div>
        </form>
        <Buttons sort={this.sortByName} />
        <SearchResults employees={this.state.results} />
      </Container>
    </Wrapper>
  );
}
}

export default App;
