import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [postsList, setpostsList] = useState([]);
  const getPosts = () => {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        setpostsList(response.data);
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
<div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3" style={{paddingTop: "40px"}}>
{postsList.map((e) => (
    <div className="col" key={e.id}>
    <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div className="card-body">
            <h1 className="text-body-emphasis">{e.title}</h1>
              <p className="card-text">{e.intro}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">
                    <Link to = {`post/${e.id}`}>Ver</Link></button>
                </div>
              </div>
            </div>
          </div>
          </div>
          )
          )
      }
      </div>
    </>
  );
}
