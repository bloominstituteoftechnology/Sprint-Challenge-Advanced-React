import React from "react";

import './App.css';
import { Container } from "semantic-ui-react";

//components
import PlayerCard from "./components/PlayerCard";
import FilteredSearchResultes from './components/FilteredSearchResults'
import PlayerSearchForm from './components/PlayerSearchForm'
//data
import Axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading:true,
      players:[],
      countrySearch:"",
      filteredSearch: false
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({
          isLoading:false,
          players:res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.countrySearch !== this.state.countrySearch) {
      this.setState(prevState => {
        return {
          ...prevState,
          filteredSearch: true
        }
      })
      console.log("App",this.state.countrySearch)
    }
  }

  countrySearch = userEntry => {
    this.setState((prevState) => {
      return {
        ...prevState,
        countrySearch: userEntry
      }
    })
  }

  render() {
    return (
      <Container >
        {/* <Search countries={this.state} /> */}
        <PlayerSearchForm players={this.state.players} countrySearch={this.countrySearch}/>
        {
          this.state.filteredSearch === false
          ? <PlayerCard players={this.state} />
          : <FilteredSearchResultes players={this.state.players}/>
        }
      </Container>
    );
  }
}

export default App;
