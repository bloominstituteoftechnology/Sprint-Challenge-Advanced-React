import React, { useState, useEffect } from "react";
import axios from "axios";

export const useGetInfo = async (baseUrl, subText) => {
  // const apiData = await axios.get(`${baseUrl}`).then(results => results.data);
  // console.log(apiData);
  // return apiData;
  const [data, setData] = useState(null);
  useEffect(() => {
    let mounted = true;
    (async () => {
      const res = await axios
        .get(baseUrl)
        .then(results => setData(results))
        .catch(err => console.log(err));
    })();
    const cleanup = () => {
      mounted = false;
    };
    return cleanup;
  }, [baseUrl]);
  return data;
};

//====custom hook below.  Works with DonationsList:
//....const [token, setToken] line
export const useGetToken = (baseApi, subText, loginTest, tokenReturn) => {
  const [token, setToken] = useState(tokenReturn);
  axios
    .post(`${baseApi}${subText}`, loginTest)
    .then(results => {
      // console.log(results.data.token);
      let tokenReturn = results.data.token;
      console.log(tokenReturn);
      setToken(tokenReturn);
      // setUserToken(results.data.token);
      // console.log(userToken);
    })
    .catch(err => console.log(err));
  return [token];
};

export const getInfo = (testApi, subText) => {
  axios
    .get(`${testApi}${subText}`)
    .then(results => console.log(results.data.data))
    .catch(err => console.log(err));
};

//HOW TO:
/*
const tokenName = { username: "<username>", password: "<password>" };

useEffect(() => {
  axios.post(apiAdd, { tokenName }).then(results => {});
});
*/
