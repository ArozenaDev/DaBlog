import { Field, Form, Formik } from "formik";
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
            <div className="">
        <div className="input-group mb-3" >
            <span className="input-group-text" id="basic-addon1">
                 Título:
            </span>
          <Field type="text" name="title" placeholder="Título" title="title" className="form-control"/>
          </div>
          <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
                 Contenido:
            </span>
          <Field as="textarea" name="content" placeholder="Introduce el contenido de tu post" className="form-control" />
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
          <button type="submit" className="btn btn-primary">Crear nuevo post</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
