import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
const News = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency",
      params: { safeSearch: "Off", textFormat: "Raw" },
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "57e77c877dmsh2c484ae2d0fb83cp1ab21fjsn36f8054881d6",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.value);
        setData(response.data.value);
      })
      .catch(function (error) {
        console.error("Error : ", error);
      });
  }, []);

  return (
    <>
      <div class="container my-5">
        <div className="row text-center">
        {data.map((value) => {
          return (
            <div className="col my-3">
            <NewsCard
              url={value.url}
              image={value?.image?.thumbnail?.contentUrl}
              title={value.name}
              description={value.description}
            />
            </div>
          );
        })}
        </div>
      </div>
    </>
  );
};

export default News;
