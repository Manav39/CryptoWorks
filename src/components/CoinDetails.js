import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CoinDetails.css";
import DOMPurify from "dompurify";
const CoinDetails = () => {
  const { coinId } = useParams();
  const [curr, setCurr] = useState({});
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setCurr(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="coin-container">
        <div className="content">
          <h1>{curr.name}</h1>
        </div>
        <div className="content">
          <div className="rank">
            <span className="rank-btn">Rank #{curr.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading">
              {curr.image ? <img src={curr.image.small} alt="" /> : null}
              <p>{curr.name}</p>
              <p>{curr.symbol}</p>
            </div>
            <div className="coin-price">
              <h1>
                ₹
                {curr.market_data?.current_price
                  ? curr.market_data.current_price.inr
                  : null}
              </h1>
            </div>
          </div>
        </div>
        <div className="content">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {curr.market_data?.price_change_percentage_1h_in_currency ? (
                    <p>
                      ₹
                      {
                        curr.market_data.price_change_percentage_1h_in_currency
                          .inr
                      }
                    </p>
                  ) : null}
                </td>
                <td>
                  {curr.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      ₹
                      {
                        curr.market_data.price_change_percentage_24h_in_currency
                          .inr
                      }
                    </p>
                  ) : null}
                </td>
                <td>
                  {curr.market_data?.price_change_percentage_7d_in_currency ? (
                    <p>
                      ₹
                      {
                        curr.market_data.price_change_percentage_7d_in_currency
                          .inr
                      }
                    </p>
                  ) : null}
                </td>
                <td>
                  {curr.market_data?.price_change_percentage_14d_in_currency ? (
                    <p>
                      ₹
                      {
                        curr.market_data.price_change_percentage_14d_in_currency
                          .inr
                      }
                    </p>
                  ) : null}
                </td>
                <td>
                  {curr.market_data?.price_change_percentage_30d_in_currency ? (
                    <p>
                      ₹
                      {
                        curr.market_data.price_change_percentage_30d_in_currency
                          .inr
                      }
                    </p>
                  ) : null}
                </td>
                <td>
                  {curr.market_data?.price_change_percentage_1y_in_currency ? (
                    <p>
                      ₹
                      {
                        curr.market_data.price_change_percentage_1y_in_currency
                          .inr
                      }
                    </p>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content">
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>24 Hour Low</h4>
                {curr.market_data?.low_24h ? (
                  <p>₹{curr.market_data.low_24h.inr.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="row">
                <h4>24 Hour High</h4>
                {curr.market_data?.high_24h ? (
                  <p>₹{curr.market_data.high_24h.inr.toLocaleString()}</p>
                ) : null}{" "}
              </div>
            </div>
            <div className="right">
              <div className="row">
                <h4>Market Cap</h4>
                {curr.market_data?.market_cap ? (
                  <p>₹{curr.market_data.market_cap.inr.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="row">
                <h4>Circulating Supply</h4>
                {curr.market_data ? (
                  <p>₹{curr.market_data.circulating_supply}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="about">
            <h3>About</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  curr.description ? curr.description.en : ""
                ),
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
