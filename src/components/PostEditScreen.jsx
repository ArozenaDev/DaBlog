import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function PostEditScreen() {
    const navigate = useNavigate();
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

    const handleEditPost = (values) => {
        axios
        .patch(`http://localhost:3000/posts/${values.id}`, values)
        .then(() => {
          getPost();
        })
        .catch((error) => console.log("ERROR", error.message));
        navigate('/admin');
    }

      console.log(post.title);
  return (
<Formik
      initialValues={{
        title: post.title,
        content: post.content,
        category: post.category,
        intro: post.intro,
      }}
      onSubmit={(values) => handleEditPost(values)}
    >
      {() => (
        <Form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                 Título:
            </span>
          <Field type="text" name="title" placeholder="Título" title="title" className="form-control"/>
          </div>
          <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
                 Contenido:
            </span>
          <Field as="textarea" type="text" name="content" placeholder="Introduce el contenido de tu post" className="form-control"/>
          </div>
          <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
                 Categoria:
            </span>
          <Field type="text" name="category" placeholder="Categoría" category="category" className="form-control"/>
          </div>
          <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
                 Intro:
            </span>
          <Field type="text" name="intro" placeholder="Descripción corta de tu post" className="form-control"/>
          </div>
          <button type="submit" className="btn btn-primary">Editar post</button>
        </Form>
      )}
    </Formik>
  )
}