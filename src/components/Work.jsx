import React, { useEffect, useState } from "react";
import "../style/work.css";
import { WORK } from "./utils/content";
const Work = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url =
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@omami-thatsgood";
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error. The status is ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="work">
      <div className="container">

      <h3 className="my_tools work-header display-2 mt-5 mb-5 pl-5">Medium Articles</h3>
      {loading && <div>Loading medium articles</div>}
      {error && <div>Looks like our wires are crossed</div>}
      <div className="blog-container d-flex flex-wrap justify-content-around">
        {data &&
          data.items.map((item) => (
            <div className="work-item blog-item m-3">
              <div className="header-bg">
                <h4 className="h3">{item.title}</h4>
                <p className="author blockquote-footer mt-5">{item.author}</p>
                <a className="btn btn-outline-dark mt-5" href={item.link} target="_blank">
                  Visit Article
                </a>
              </div>
            </div>
          ))}
      </div>
      <h3 className="my_tools work-header display-2 mt-5 mb-5 pl-5">My Projects</h3>
      <div className="my-work d-flex flex-wrap justify-content-around">
        {WORK.map((item) => (
          <div className="work-item projects m-3">
            <div className="header-bg">
              <h4 className="h3">{item.title}</h4>
              <div className="desc-container">
                <p className="text-align mt-3 language">Used:</p>
                <span className="text-danger">{item.desc}</span>
              </div>
              <p className="author blockquote-footer mt-5">{item.author}</p>
              <a className="visit-btn btn btn-outline-dark mt-3" target="_blank" href={item.link}>
                Visit
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>

    </div>
  );
};

export default Work;
