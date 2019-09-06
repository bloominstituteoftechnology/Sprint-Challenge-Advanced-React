import { useEffect } from "react";

const getPlayers = () => {
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
};

export default getPlayers;
