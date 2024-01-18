import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AdminHome() {
  const [postsList, setpostsList] = useState([]);
  const getPosts = () => {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        setpostsList(response.data);
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  const removePost = (id) => {
    axios
      .delete(`http://localhost:3000/posts/${id}`)
      .then(() => {
        getPosts();
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
<div className="row row-cols-1 row-cols-sm-2 row-cols-md-1 g-3" style={{paddingTop: "40px"}}>
{postsList.map((e) => (
    <div className="col" key={e.id}>
    <div className="card shadow-sm">
            <div className="card-body">
            <h1 className="text-body-emphasis">{e.title}</h1>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">
                    <Link to = {`post-edit/${e.id}`} className="link-offset-2 link-underline link-underline-opacity-0">Editar</Link></button>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-danger"
                    onClick={() => removePost(e.id)}
                  >Eliminar</button>
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