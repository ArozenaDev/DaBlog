import React from "react";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function LayoutUser() {
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
    <div className="container">
         <header className="p-3 text-bg-dark">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <span className="fs-4">Da Blog</span>
        </a>
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" style={{paddingLeft: "30px"}}>
          <li><a href="/" className="nav-link px-2 text-secondary">Home</a></li>
          {//<li><a href="#" className="nav-link px-2 text-white">Posts</a></li>
}
          <div className="dropdown" data-bs-theme="dark">
  <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Categorías
  </button>
  <ul className="dropdown-menu">
    {postsList.map((e) => (
    <li key={e.id}><Link to = {`category/${e.category}`} className="dropdown-item">{e.category}</Link></li>
    )
  )
}
  </ul>
</div>
        </ul>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>
        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
        </div>
      </div>
  </header>
  <Outlet />
  </div>
    );
}