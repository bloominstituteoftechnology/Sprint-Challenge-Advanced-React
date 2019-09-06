import axios from "axios";
import React from "react";
import styled from "styled-components";
// import Pagination from "./Pagination";
import WorldCupCard from "./WorldCupCard";

const MainCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px auto;
`;

class WomanWorldCup extends React.Component {
  constructor() {
    super();
    this.state = {
      player: []
    };
  }
  componentDidMount() {
    this.fetchMyUser();
  }
  fetchMyUser = _ => {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => this.setState({ player: res.data }))
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={player.length}
        paginate={paginate}
      /> */}
        <MainCard>
          <WorldCupCard player={this.state.player} />;
        </MainCard>
        {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={player.length}
        paginate={paginate}
      /> */}
      </div>
    );
  }
}

export default WomanWorldCup;
