import { Link, Outlet } from "react-router-dom";

export default function LayoutAdmin() {
    return (
      <div style={{display: 'flex'}}>
<div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: '280px', height: '100vh'}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span className="fs-4">Da ADMIN Blog</span>
    </a>
    <ul className="nav nav-pills flex-column mb-auto" style={{paddingTop: '20px'}}>
      <li className="nav-item">
        <a href="/admin" className="nav-link text-white" aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"></svg>
          Listado de posts
        </a>
      </li>
      <li>
        <Link to="post-add" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"></svg>
          Nuevo post
        </Link>
      </li>
    </ul>
  </div>
  <div style={{maxHeight: '100vh', overflowY: 'auto', padding: '30px'}}>
    <Outlet />
  </div>
</div>
    );
}