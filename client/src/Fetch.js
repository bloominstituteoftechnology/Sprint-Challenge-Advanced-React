import React from 'react';

const useFetch = (url, options) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
        console.log(json);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return { response, error };
}

export default useFetch;