import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Currency = () => {
  const [cur,setCur]=useState([])
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/list')
    .then(data=>setCur(data.data))
    .catch(err => console.log(err))
  })
  return (
    <div>
      <h1>Currency</h1>
      <button
        onClick={() => {
          navigate("/currency/bitcoin");
        }}
        className="btn btn-primary"
      >
        Bitcoin
      </button>
      <button onClick={{}} className="btn btn-primary">
        Polygon
      </button>
      <button onClick={{}} className="btn btn-primary">
        Filecoin
      </button>
      <button onClick={{}} className="btn btn-primary">
        Ethereum
      </button>
      {
        cur.map((val)=>{
          return(
            <div>
              {val.id}
            </div>
          )
        })
      }
    </div>
  );
};

export default Currency;
