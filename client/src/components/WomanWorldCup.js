import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
import WorldCupCard from "./WorldCupCard";

const MainCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px auto;
`;

function WomanWorldCup() {
  const [player, setPlayer] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = player.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log("it's working:", res.data);
        setPlayer(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={player.length}
        paginate={paginate}
      />
      <MainCard>
        {currentPosts.map(data => {
          return (
            <WorldCupCard
              key={data.id}
              name={data.name}
              country={data.country}
              searches={data.searches}
            />
          );
        })}
      </MainCard>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={player.length}
        paginate={paginate}
      />
    </div>
  );
}

export default WomanWorldCup;
