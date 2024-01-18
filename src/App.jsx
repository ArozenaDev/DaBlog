import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LayoutUser from './components/LayoutUser';
import LayoutAdmin from './components/LayoutAdmin';
import PostAddScreen from './components/PostAddScreen';
import Home from './components/home';
import PostScreen from './components/PostScreen';
import CategoryScreen from './components/CategoryScreen';
import AdminHome from './components/AdminHome';

function App() {

  return (
    <Routes>
      <Route path="/" element={<LayoutUser />}>
        <Route index element={<Home />} />
        <Route path="category/:categoryID" element={<CategoryScreen />} />
        <Route path="post/:postID" element={<PostScreen />} />
      </Route>
      <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<AdminHome />} />
          {//<Route path="post-list" element={<PostListScreen />} />
          }
          <Route path="post-add" element={<PostAddScreen />} />
          {/*<Route path="post-update" element={<PostUpdateScreen />} />
          <Route path="category-list" element={<CategoryListScreen />} />
          <Route path="category-add" element={<CategoryAddScreen />} />
      <Route path="category-update" element={<CategoryUpdateScreen />} />*/}
      </Route>
    </Routes>
  )
}

export default App