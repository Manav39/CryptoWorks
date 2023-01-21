import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => setCoin(res.data));
  }, []);
  return (
    <div>
      <p>{coin.symbol}</p>
    </div>
  );
};

export default CoinPage;
