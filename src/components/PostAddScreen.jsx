import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function PostAddScreen() {
    const navigate = useNavigate();

    const handleNewPost = (values) => {
        axios.post('http://localhost:3000/posts', values);
        navigate('/admin');
    }

  return (
    <Formik
      initialValues={{
        title: '',
        content: '',
        category: '',
        intro: '',
      }}
      onSubmit={(values) => handleNewPost(values)}
    >
      {() => (
        <Form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                 Título:
            </span>
          <Field type="text" name="title" placeholder="Título" title="title" />
          </div>
          <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
                 Contenido:
            </span>
          <Field as="textarea" type="text" name="content" placeholder="Introduce el contenido de tu post" />
          </div>
          <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
                 Categoria:
            </span>
          <Field type="text" name="category" placeholder="Categoría" category="category" />
          </div>
          <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
                 Intro:
            </span>
          <Field type="text" name="intro" placeholder="Descripción corta de tu post" />
          </div>
          <button type="submit" className="btn btn-primary">Crear nuevo post</button>
        </Form>
      )}
    </Formik>
  );
}
