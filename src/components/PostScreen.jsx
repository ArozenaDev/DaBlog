import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostScreen() {
    const { postID } = useParams();

        const [post, setPost] = useState([]);
        const getPost = () => {
          axios
            .get(`http://localhost:3000/posts/${postID}`)
            .then((response) => {
              setPost(response.data);
            })
            .catch((error) => console.log("ERROR", error.message));
        };
      
        useEffect(() => {
          getPost();
        }, );

    return (
        <>
            <div className="my-5">
              <div className="p-5 text-center bg-body-tertiary">
                <div className="container py-5">
                  <h1 className="text-body-emphasis">{post.title}</h1>
                  <p className="col-lg-8 mx-auto lead">
                    {post.content}
                  </p>
                  <p className="col-lg-2 mx-auto lead fs-6">
                      Categoría: {post.category}
                  </p>
                </div>
              </div>
            </div>
      </>
    )
}