import axios from "axios";
import { useEffect, useState } from "react";

const useGetPlayers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log("it's working:", res.data);
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return [data, setData];
};

export default useGetPlayers;
